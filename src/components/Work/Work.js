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
                <main className="ma ma--work">
                    <Loading className={this.state.loaderActive
                    ? 'lds-ripple'
                    : 'lds-ripple lds-ripple--inactive'}></Loading>
                    <Gallery loaderActiveAction={this.handleLoader}></Gallery>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default WorkComponent;
