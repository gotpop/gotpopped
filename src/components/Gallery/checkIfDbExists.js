import Dexie from "dexie";

const checkDbExists = async () => {
    let dbExists;
    await Dexie.exists("gallery_database")
        .then(exists => dbExists = exists )
        .catch(error => console.error("Error:", error));
    
    return dbExists;
}

export default checkDbExists;
