import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./home.component.scss";

class HomeComponent extends Component {

  render() {
    return (
      <article className="home view-item">
        <h2>Hello, my name's Liam.</h2>
        <p>I build enterprise websites that perform well on all devices, focusing on responsive design, aesthetics, clean code &amp;
          page speed.</p>
          <Link className="btn btn--primary" to="/work">View projects</Link>
      </article>
    );
  }
}

export default HomeComponent;
