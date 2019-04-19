import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./home.component.scss";

class HomeComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<article className="home">
  <h2>Hello, my name's Liam.</h2>
  <p>I build enterprise websites that perform well on all devices, focusing on responsive design, aesthetics, clean code &amp;
    page speed.</p>
    <Link className="btn btn--primary" to="/work">Get started!</Link>
</article>

    );
  }
}

export default HomeComponent;
