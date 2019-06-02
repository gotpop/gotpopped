import db from "./storage";

class StoreProjects {

    storeProjectsPages(projects) {
        db.gallery
            .put({
                name: "AllProjectPages",
                storeAllProjects: projects
            })
            .then()
            .catch(error => {
                console.log("Ooops: " + error);
            });
    }

    storeAllProjects(projects) {
        db.gallery
            .put({
                name: "AllProjects",
                storeAllProjects: projects
            })
            .then()
            .catch(error => {
                console.log("Ooops: " + error);
            });
    }
}

export default StoreProjects;
