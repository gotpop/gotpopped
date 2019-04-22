import React, { Component } from 'react';
import "./gallery.component.scss";

class Gallery extends Component {

  state = {
    data : [],
    movies : []
  };

  componentDidMount() {
    fetch('/behance/projects')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.projects })
      })
  }

  render() {
    return (
      <div>
        <h1>Work</h1>
        <ul>
          {this.state.movies.map(movie => {
            return <li key={`movie-${movie.id}`}>
            {movie.name}
            {movie.covers.original}
            <img src="{`movie.covers.origina}" alt="hello"/>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Gallery;
