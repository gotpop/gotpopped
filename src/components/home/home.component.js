import React, { Component } from 'react';
import "./home.component.scss";
import Button from '../button/button.component';

class HomeComponent extends Component {

  render() {
    return (
      <section className="ma__view ma__view--home">
        <h2>Hello, my name's Liam.</h2>
        <p>I build enterprise websites that perform well on all devices, focusing on responsive design, aesthetics, clean code &amp;
          page speed.</p>
        <Button></Button>
      </section>
    );
  }
}

export default HomeComponent;
