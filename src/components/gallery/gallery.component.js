import React, { Component } from 'react';

import "./gallery.component.scss";

class Gallery extends Component {

  // state = {
  //   data : [],
  //   movies : []
  // };

  constructor() {
    super()
    this.state = { movies: [] }
  }



  componentDidMount() {
    // fetch('/behance/projects')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }))
    //   .then(data => {
    //     this.setState(data);
    //     console.log('Logging the  data', this.state.data);
    //   });

      //  var myRequest = new Request(website);
    // let movies = [];

    fetch('/behance/projects')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.projects })
      })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <ul>
          {this.state.movies.map(movie => {
            return <li key={`movie-${movie.id}`}>{movie.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Gallery;
