import React from "react";
import Movie from "./Movie";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.search);
    fetch("https://www.omdbapi.com/?apikey=e4db3ced&t=" + this.state.search)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data
        });
        console.log(this.state.movies);
        if (this.state.movies.Response === "False") {
          this.setState({
            error: "Movie not Found"
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Search movies</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3 w-50 p-3">
            <input
              type="text" className="form-control"
              placeholder="Please enter movie name..."
              onChange={this.handleChange}
              value={this.state.search}
            />
              <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}

export default Search;
