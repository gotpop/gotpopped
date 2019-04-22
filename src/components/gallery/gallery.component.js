import React, { Component } from 'react';

import "./header.component.scss";

class Header extends Component {

  // state = {
  //   tex t: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
      <header className="he">
          <HeaderTitle></HeaderTitle>
          <HeaderMenu></HeaderMenu>
      </header>
    );
  }
}

export default Header;
