import React, {Component} from 'react';
import Glide from '@glidejs/glide';
import "./Gallery.scss";
import db from "../../services/storage";
// import indexDb from '../../services/indexDb';

class Gallery extends Component {

    state = {
        singleProjectsArray: [],
        allProjectsArray: [],
        loaderActive: true
    };

    getAllProjects = () => {
        fetch('/behance/projects')
            .then(response => response.json())
            .then(data => {
                this.setState({allProjectsArray: data.projects});
                this.getProject(data.projects);
                this.storeAllProjects(data.projects);
            })
            .catch(error => console.error('Error:', error));
    }

    storeAllProjects(projects) {
        db
            .gallery
            .put({name: "AllProjects", storeAllProjects: projects})
            .then(() => {
                return db
                    .gallery
                    .get('AllProjects');
            })
            .then((friend) => {
                // console.log("All projects: " + friend.storeAllProjects);
            })
            .catch((error) => {
                console.log("Ooops: " + error);
            });
    }

    storeProjectsPages(projects) {
        db
            .gallery
            .put({name: "AllProjectPages", storeAllProjects: projects})
            .then(() => {
                return db
                    .gallery
                    .get('AllProjectPages');
            })
            .then((friend) => {
                // console.log("All projects: " + friend.storeAllProjects);
            })
            .catch((error) => {
                console.log("Ooops: " + error);
            });
    }

    componentDidMount() {
        // Check if starage has been used yet and if not then make an api call
        let indexDbStorage;
        db
                    .gallery
                    .get('AllProjectPages').then((stuff)=> {
                        console.log('Content of IndexedDB', stuff);
                        indexDbStorage = stuff.storeAllProjects;
                        if (indexDbStorage === undefined) {
                            this.getAllProjects();
                            console.log('Fetch projects from api', indexDbStorage);
                            
                        } else {
                            console.log('Fetch projects from indexDb', indexDbStorage);
                            const carousel = new Glide('.glide', {
                                type: 'carousel',
                                perView: 1,
                                gap: 100
                            });
                            // this.storeProjectsPages(singleProjects);
                            this.setState({singleProjectsArray: indexDbStorage});
                            // Tell parent component that the gallery has loaded
                            this.handleResultPromiseState(false);
                            carousel.mount();
                        }
                    });
    }

    handleResultPromiseState = (loaderBoolean) => {
        this
            .props
            .loaderActiveAction(loaderBoolean);
    }

    getProject(projects) {
        let singleProjects = [];
        let promiseArray = [];

        // Create an array of fetch promises
        for (const project of projects) {
            promiseArray.push(fetch(`/behance/project/?projectId=${project.id}`).then(response => response.json()).then(data => {
                singleProjects.push(data.project);
            }).catch(error => console.error('Error:', error)));
        }

        // Execute and wait for all to resolve before setting state
        Promise
            .all(promiseArray)
            .then(() => {
                const carousel = new Glide('.glide', {
                    type: 'carousel',
                    perView: 1,
                    gap: 100
                });
                this.storeProjectsPages(singleProjects);
                this.setState({singleProjectsArray: singleProjects});
                // Tell parent component that the gallery has loaded
                this.handleResultPromiseState(false);
                carousel.mount();
            });
    }

    render() {
        return (
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {this
                            .state
                            .singleProjectsArray
                            .map(item => {
                                return <li key={`item-${item.id}`} className="glide__slide">
                                    <article>
                                        <h2>{item.name}</h2>
                                        <p className={item.name} key={item.id}>{item.modules[1].text_plain}</p>
                                    </article>
                                    <figure className="glide__figure">
                                        <img
                                            width="1001"
                                            height="569"
                                            className={item.name}
                                            key={item.id}
                                            src={item.modules[0].sizes.original}
                                            alt="Gallery"/>
                                    </figure>
                                </li>
                            })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Gallery;
