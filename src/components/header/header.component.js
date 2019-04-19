import React, { Component } from 'react';

import "./header.component.scss";

import HeaderTitle from '../header-title/header-title.component.js';
import HeaderMenu from '../header-menu/header-menu.component.js';

class Header extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <div>
          <HeaderTitle></HeaderTitle>
          <HeaderMenu></HeaderMenu>
      </div>
    );
  }
}

export default Header;
