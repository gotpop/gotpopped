import React, { Component } from 'react';
import "./menu-trigger.component.scss";

class MenuTriggerComponent extends Component {

  state = {
    active: false
  };

  activateLasers() {
    console.log('Clicked!');
  }


  render() {
    return (
      <div id="mobileMenuTrigger" className="mobile-menu-trigger" onClick={this.activateLasers}>
        <span className="mobile-menu-trigger-burger"></span>
        <span className="mobile-menu-trigger-text">Menu</span>
      </div>
    );
  }
}

export default MenuTriggerComponent;
