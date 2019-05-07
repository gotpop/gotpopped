import React, {Component} from './node_modules/react';
import "./work.component.scss";
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer.js/index.js';

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
