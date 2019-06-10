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

   singleProjects = [];
   promiseArray = [];

    state = {
        singleProjectsArray: [],
        allProjectsArray: [],
        loaderActive: true
    };

    loadingAnimation = loaderBoolean => {
        this.props.loaderActiveAction(loaderBoolean);
    }

    getProject() {
        Promise.all(this.promiseArray).then(() => {
            this.goStore.storeProjectsPages(this.singleProjects);
            this.setState({
                singleProjectsArray: this.singleProjects
            });
            this.loadingAnimation(false);
            this.goMount.init();
        });
    }

    makeArrayOfSingleProjectFetch(projects) {
        for (const project of projects) {
            const url = `/behance/project/?projectId=${project.id}`;

            this.promiseArray.push(
                fetch(url)
                .then(response => response.json())
                .then(data => this.singleProjects.push(data.project))
                .catch(error => console.error("Error:", error)));
        }
    }

    getAllProjects = () => {
        fetch("/behance/projects")
            .then(response => response.json())
            .then(data => this.getAllProjectsCallback(data))
            .catch(error => console.error("Error:", error));
    }
        
    getAllProjectsCallback(data) {
        this.setState({ allProjectsArray: data.projects });
        this.makeArrayOfSingleProjectFetch(data.projects);
        this.getProject();
        this.goStore.storeAllProjects(data.projects);
    }

    localBuildCallback(data) {
        this.setState({ singleProjectsArray: data.storeAllProjects });
        this.loadingAnimation(false);
        this.goMount.init();
    }

    localBuild = () => {
        db.gallery.get("AllProjectPages").then(data => this.localBuildCallback(data));
    }

    loadLocalOrRemoteData = async () => {
        const dbExists = await checkIfDbExists();
        dbExists ? this.localBuild() : this.getAllProjects();
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
