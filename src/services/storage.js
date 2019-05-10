    
import Dexie from 'dexie';

const db = new Dexie('ReactSampleDB');
db.version(1).stores({ todos: '++id' });
db.version(1).stores({ gallery: '++id' });

export default db;
