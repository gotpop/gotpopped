import React, { Component } from "react";
import Glide from "@glidejs/glide";
import Dexie from "dexie";
import db from "../../services/storage";
import StoreProjects from "../../services/indexDb";
import "./Gallery.scss";

class Gallery extends Component {

    goStore = new StoreProjects();

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
            this.mountGallery();
        });
    }

    mountGallery() {
        const carousel = new Glide(".glide", {
            type: "carousel",
            perView: 1,
            gap: 100
        });
        carousel.mount();
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
            promiseArray.push(
                fetch(`/behance/project/?projectId=${project.id}`)
                    .then(response => response.json())
                    .then(data => singleProjects.push(data.project))
                    .catch(error => console.error("Error:", error))
            );
        }

        Promise.all(promiseArray).then(() => {
            this.goStore.storeProjectsPages(singleProjects);
            this.setState({ singleProjectsArray: singleProjects });
            this.handleResultPromiseState(false);
            this.mountGallery();
        });
    }

    render() {
        return (
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {this.state.singleProjectsArray.map(item => {
                            return (
                                <li
                                    key={`item-${item.id}`}
                                    className="glide__slide"
                                >
                                    <article className="glide__article">
                                        <h2 className="glide__title">
                                            {item.name}
                                        </h2>
                                        <p
                                            className="glide__text"
                                            key={item.id}
                                        >
                                            {item.modules[1].text_plain}
                                        </p>
                                    </article>
                                    <figure className="glide__figure">
                                        <img
                                            width="1001"
                                            height="569"
                                            className={item.name}
                                            key={item.id}
                                            src={item.modules[0].sizes.original}
                                            alt="Gallery"
                                        />
                                    </figure>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;
