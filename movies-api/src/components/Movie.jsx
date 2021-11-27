import React from "react";

class Movies extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{this.props.movies.Title}</h4>
          <p className="card-content">{this.props.movies.Plot}</p>
          <img alt={this.props.movies.Title} src={this.props.movies.Poster} />
          <p className="card-content">{this.props.movies.Writer}</p>
        </div>
      </div>
    );
  }
}

export default Movies;