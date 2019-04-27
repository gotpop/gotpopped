import React, { Component } from 'react';
import "./work.component.scss";
import Gallery from '../gallery/gallery.component';

class WorkComponent extends Component {
  render() {
    return (
      <section className="ma__view ma__view--work">
        <Gallery></Gallery>
      </section>
    );
  }
}

export default WorkComponent;
