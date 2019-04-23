import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header-menu.component.scss";

class HeaderMenuComponent extends Component {

  render() {
    return (
      <nav className="header-menu">
        <Link className="header-menu-item" to="/">
            <span>HOME</span>
            <span className="icon">
            
            </span>
        </Link>
        <Link className="header-menu-item" to="/work">
            <span>WORK</span>
            <span className="icon">
            
            </span>
        </Link>
        <Link className="header-menu-item" to="/skills">
            <span>SKILLS</span>
            <span className="icon">
            
            </span>
        </Link>
      </nav>
    );
  }
}

export default HeaderMenuComponent;
