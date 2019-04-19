import React, { Component } from 'react';

import "./home.component.scss";

class HomeComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<article [@slideIn]='state'>
  <h2>Hello, my name's Liam.</h2>
  <p>I build enterprise websites that perform well on all devices, focusing on responsive design, aesthetics, clean code &amp;
    page speed.</p>
  <app-button></app-button>
</article>

    );
  }
}

export default HomeComponent;
