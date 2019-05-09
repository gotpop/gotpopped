import React, {Component} from 'react';
import "./Work.scss";
import Gallery from '../Gallery/Gallery';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';

class WorkComponent extends Component {

    state = {
        loaderActive: true
    };

    handleLoader = (loaderBoolean) => {
        this.setState({loaderActive: loaderBoolean});
        console.log('this.state.loaderActive', this.state.loaderActive);
    }

    render() {
        return (
            <div>
                <main
                    className={this.state.loaderActive
                    ? 'ma ma--work ma--loading'
                    : 'ma ma--work ma--loaded'}>
                    <Loading loaderActive={this.state.loaderActive}></Loading>
                    <Gallery loaderActiveAction={this.handleLoader}></Gallery>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default WorkComponent;
