import React, { Component } from 'react';

import "./site.component.scss";

class SiteComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<main [@routerTransition]="getState(o)">
  <router-outlet #o="outlet"></router-outlet>
</main>
<app-footer></app-footer>

    );
  }
}

export default SiteComponent;
