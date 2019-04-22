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
        <ul className="gp-gallery">
          {this.state.movies.map(movie => {
            return <li key={`movie-${movie.id}`} className={movie.name}>
            <h1>{movie.name}</h1>
            <p>{movie.id}</p>
            <img className={movie.name} key={movie.id} src={movie.covers.original} alt="Gallery"/>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Gallery;
