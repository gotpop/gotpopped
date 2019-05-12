import db from "storage";

class Gallery {
    // Prototype method
    save() {
        return db.gallery.put(this); // Will only save own props.
    }

    // Prototype property
    get age() {
        return moment(Date.now()).diff (this.birthDate, 'years');
    }
}

db.gallery.mapToClass(Gallery);
