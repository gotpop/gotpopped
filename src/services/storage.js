import Dexie from 'dexie';

var db = new Dexie("friend_database");
db.version(1).stores({
    friends: 'name,shoeSize'
});

//
// Put some data into it
//


export default db;
