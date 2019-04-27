import React, { Component } from 'react';
import "./menu-trigger.component.scss";

class MenuTriggerComponent extends Component {

  state = {
    active: false
  };

  toggss = (e) => {
    this.props.togg('test-key', e);
  }

  render() {
    return (
      <div onClick={this.toggss} id="mobileMenuTrigger" className="mobile-menu-trigger">
        <span className="mobile-menu-trigger-burger"></span>
        <span className="mobile-menu-trigger-text">Menu</span>
      </div>
    );
  }
}

export default MenuTriggerComponent;
