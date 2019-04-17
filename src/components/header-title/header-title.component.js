import React, { Component } from 'react';

import "./header-title.component.scss";

class HeaderTitle extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <section class="header-logo-wrap" routerLink="/">
      <h1 class="header-title">GotPop</h1>
      <span class="icon">
        Icon here
      </span>
    </section>
    
    );
  }
}

export default HeaderTitle;
