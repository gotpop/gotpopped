import React, { Component } from 'react';

import "./header-title.component.scss";

class HeaderTitle extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <section className="header-logo-wrap">
      <h1 className="header-title">GotPop</h1>
      <span className="icon">
        Icon here
      </span>
    </section>
    );
  }
}

export default HeaderTitle;