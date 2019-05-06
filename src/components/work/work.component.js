import React, {Component} from 'react';
import "./work.component.scss";
import Gallery from '../gallery/gallery.component';
import Footer from '../footer/footer.component.js';

class WorkComponent extends Component {
    render() {
        return (
            <div>
                <main className="ma ma--work">
                    <Gallery></Gallery>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default WorkComponent;
