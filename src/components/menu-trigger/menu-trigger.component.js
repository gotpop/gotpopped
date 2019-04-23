import React, { Component } from 'react';

import "./menu-trigger.component.scss";

class MenuTriggerComponent extends Component {

  state = {
    active: false
  };

  render() {
    return (
      <a id="mobileMenuTrigger" className="mobile-menu-trigger">
        <span className="mobile-menu-trigger-burger"></span>
        <span className="mobile-menu-trigger-text">Menu</span>
      </a>
    );
  }
}

export default MenuTriggerComponent;
