import React, { Component } from "react";
import Glide from "@glidejs/glide";
import "./Gallery.scss";
import db from "../../services/storage";
import StoreProjects from "../../services/indexDb";
import Dexie from "dexie";

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
            .then(data => {
                this.setState({ allProjectsArray: data.projects });
                this.getProject(data.projects);
                this.goStore.storeAllProjects(data.projects);
            })
            .catch(error => console.error("Error:", error));
    }

    localBuild = () => {
        db.gallery.get("AllProjectPages").then(stuff => {
            this.setState({ singleProjectsArray: stuff.storeAllProjects });
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
            .then(exists => {
                if (exists) {
                    this.localBuild();
                } else {
                    this.getAllProjects();
                }
            })
            .catch(function(error) {
                console.error(
                    "Oops, an error occurred when trying to check database existance"
                );
            });
    }

    componentDidMount() {
        this.checkDbExists();
    }

    handleResultPromiseState = loaderBoolean => {
        // Tell parent component that the gallery has loaded
        this.props.loaderActiveAction(loaderBoolean);
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
                    })
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
