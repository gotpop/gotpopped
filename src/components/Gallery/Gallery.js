import React, { Component } from "react";
import db from "../../services/storage";
import StoreProjects from "../../services/store-projects";
import Mount from "../../services/mount-gallery";
import GalleryItem from './GalleryItem';
import checkIfDbExists from './checkIfDbExists';
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
        db.gallery.get("AllProjectPages").then(data => this.localBuildActions(data));
    }
    
    localBuildActions(data) {
        this.setState({ singleProjectsArray: data.storeAllProjects });
        this.loadingAnimation(false);
        this.goMount.init();
    }

    loadLocalOrRemoteData = async () => {
        let dbExists = await checkIfDbExists();
        dbExists ? this.localBuild() : this.getAllProjects();
    }

    loadingAnimation = loaderBoolean => {
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
            this.loadingAnimation(false);
            this.goMount.init();
        });
    }
    
    componentDidMount() {
        this.loadLocalOrRemoteData();
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
