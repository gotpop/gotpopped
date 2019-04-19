import React, { Component } from 'react';

import "./header-menu.component.scss";

class HeaderMenuComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (

      <nav className="header-menu">
  <div className="header-menu-item">
    <span>HOME</span>
    <span className="icon">
     
    </span>
  </div>
  <div className="header-menu-item">
    <span>WORK</span>
    <span className="icon">
      
    </span>
  </div>
  <div className="header-menu-item">
    <span>SKLLS</span>
    <span className="icon">
    
    </span>
  </div>
</nav>


    );
  }
}

export default HeaderMenuComponent;
