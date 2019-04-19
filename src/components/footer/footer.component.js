import React, { Component } from 'react';

import "./button.component.scss";

class FooterComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <app-social></app-social>
      <small>© Copyright GotPop 2016</small>
    );
  }
}

export default FooterComponent;
