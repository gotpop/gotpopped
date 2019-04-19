import React, { Component } from 'react';

import "./pagination.component.scss";

class PaginationComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<a class="btn" [routerLink]="['/work', nextId]">
  <span>Next project -></span>
</a>

    );
  }
}

export default PaginationComponent;
