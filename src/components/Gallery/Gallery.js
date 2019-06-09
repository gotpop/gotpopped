import React, { Component } from "react";
import Dexie from "dexie";
import db from "../../services/storage";
import StoreProjects from "../../services/store-projects";
import Mount from "../../services/mount-gallery";
import GalleryItem from './GalleryItem';
import "./Gallery.scss";

class Gallery extends Component {

    goStore = new StoreProjects();
    goMount = new Mount();

    state = {
        singleProjectsArray: [],
        allProjectsArray: [],
        loaderActive: true
    };

    getAllProjects = () => {
        fetch("/behance/projects")
            .then(response => response.json())
            .then(data => this.getAllProjectsCallback(data))
            .catch(error => console.error("Error:", error));
    }
        
    getAllProjectsCallback(data) {
        this.setState({ allProjectsArray: data.projects });
        this.getProject(data.projects);
        this.goStore.storeAllProjects(data.projects);
    }

    localBuild = () => {
        db.gallery.get("AllProjectPages").then(data => {
            this.setState({ singleProjectsArray: data.storeAllProjects });
            this.handleResultPromiseState(false);
            this.goMount.init();
        });
    }

    checkDbExists = () => {
        Dexie.exists("gallery_database")
            .then(exists => exists ? this.localBuild() : this.getAllProjects())
            .catch(error => console.error("Error:", error));
    }

    componentDidMount() {
        this.checkDbExists();
    }

    handleResultPromiseState = loaderBoolean => {
        this.props.loaderActiveAction(loaderBoolean);
    }

    getProject(projects) {
        let singleProjects = [];
        let promiseArray = [];

        for (const project of projects) {
            const url = `/behance/project/?projectId=${project.id}`;

            promiseArray.push(
                fetch(url)
                    .then(response => response.json())
                    .then(data => singleProjects.push(data.project))
                    .catch(error => console.error("Error:", error))
            );
        }

        Promise.all(promiseArray).then(() => {
            this.goStore.storeProjectsPages(singleProjects);
            this.setState({ singleProjectsArray: singleProjects });
            this.handleResultPromiseState(false);
            this.goMount.init();
        });
    }

    render() {
        return (
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {this.state.singleProjectsArray.map(item => {
                            return (<GalleryItem key={item.id} item={item}/>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;
