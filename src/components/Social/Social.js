import React, { Component } from 'react';
import "./Social.scss";

class SocialComponent extends Component {
  render() {
    return (
      <section className="social">
        <nav className="social__nav">
          <a className="social__link" href="http://codepen.io/gotpop/">
            <span className="social__icon">

            </span>
          </a>
          <a className="social__link" href="http://uk.linkedin.com/in/gotpop">
            <span className="social__icon">

            </span>
          </a>
          <a className="social__link" href="https://github.com/gotpop">
            <span className="social__icon">
            
            </span>
          </a>
        </nav>
      </section>
    );
  }
}

export default SocialComponent;
