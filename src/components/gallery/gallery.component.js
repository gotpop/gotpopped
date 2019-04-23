import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import "./gallery.component.scss";

class Gallery extends Component {

  state = {
    singleProjectsArray : [],
    allProjectsArray : []
  };

  componentDidMount() {
    fetch('/behance/projects')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allProjectsArray: data.projects
        });
        this.getProject(data.projects);
      });
  }

  getProject(projects) {
    let singleProjects = [];
    let promiseArray = [];

    // Create an array of fetch promises 
    for (const project of projects) {
      promiseArray.push(
        fetch(`/behance/project/?projectId=${project.id}`)
        .then(response => response.json())
        .then(data => {
          singleProjects.push(data.project);
        })
      );
    }

    // Execute and wait for all to resolve before setting state
    Promise.all(promiseArray).then(() => {
      this.setState({
        singleProjectsArray: singleProjects
      });
      new Glide('.glide').mount();
    });
  }

  render() {
    return (
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="gp-gallery glide__slides">
            {this.state.singleProjectsArray.map(movie => {
              return <li key={`movie-${movie.id}`} className="glide__slide">
              <h1>{movie.name}</h1>
              <p>{movie.id}</p>
              <img className={movie.name} key={movie.id} src={movie.modules[0].sizes.original} alt="Gallery"/>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery;
