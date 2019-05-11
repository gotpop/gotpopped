// Storage
import Dexie from 'dexie';

var db = new Dexie("gallery_database");
db.version(1).stores({
    gallery: 'name,storeAllProjects'
});

export default db;
