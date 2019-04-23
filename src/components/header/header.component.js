import React, { Component } from 'react';
import "./header.component.scss";
import HeaderTitle from '../header-title/header-title.component.js';
import HeaderMenu from '../header-menu/header-menu.component.js';

class Header extends Component {
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
