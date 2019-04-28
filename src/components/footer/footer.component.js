import React, { Component } from 'react';
import Social from "../social/social.component";
import "./footer.component.scss";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="fo">
        <small>© Copyright GotPop 2019</small>
        <Social></Social>
      </footer>
    );
  }
}

export default FooterComponent;
