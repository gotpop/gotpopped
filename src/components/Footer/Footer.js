import React, {Component} from 'react';
import Social from "../Social/Social";
import "./Footer.scss";

class FooterComponent extends Component {
    render() {
        return (
            <footer className="fo">
                <Social></Social>
                <small>© Copyright GotPop 2019</small>
            </footer>
        );
    }
}

export default FooterComponent;
