import React, {Component} from 'react';
import "./Work.scss";
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

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
