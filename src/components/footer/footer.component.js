import React, { Component } from 'react';

import "./footer.component.scss";

class FooterComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <footer className="fo"><app-social></app-social>
      <small>© Copyright GotPop 2016</small></footer>
    );
  }
}

export default FooterComponent;
