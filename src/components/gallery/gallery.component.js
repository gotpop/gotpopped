import React, { Component } from 'react';
import "./gallery.component.scss";

class Gallery extends Component {

  state = {
    singleProjectsArray : [],
    movies : []
  };

  componentDidMount() {
    fetch('/behance/projects')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.projects });
        this.getProject(data.projects);
      });
  }

  getProject(projects) {
    let singleProjects = [];
    let promiseArray = [];
    
    for (const project of projects) {
      promiseArray.push(
        fetch(`/behance/project/?projectId=${project.id}`)
        .then(response => response.json())
        .then(data => {
          singleProjects.push(data.project);
          // console.log('Log name: ', singleProjects);
        })

      );
      
    }

    Promise.all(promiseArray).then(()=> {
      this.setState({ singleProjectsArray: singleProjects });
    });


    
  }

  render() {
    return (
      <div>
        <h1>Work</h1>
        <ul className="gp-gallery">
          {this.state.singleProjectsArray.map(movie => {
            return <li key={`movie-${movie.id}`} className={movie.name}>
            <h1>{movie.name}</h1>
            <p>{movie.id}</p>
            <img className={movie.name} key={movie.id} src={movie.modules[0].sizes.original} alt="Gallery"/>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Gallery;
