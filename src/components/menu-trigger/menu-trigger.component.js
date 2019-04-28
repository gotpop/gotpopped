import React, { Component } from 'react';
import "./menu-trigger.component.scss";

class MenuTriggerComponent extends Component {

  state = {
    active: false
  };

  clickEventForParent = (e) => {
    this.props.togg('test-key', e);
  }

  render() {
    return (
      <button onClick={this.clickEventForParent} className="mobile-menu-trigger">
        <span className="mobile-menu-trigger-burger"></span>
        <span className="mobile-menu-trigger-text">Menu</span>
      </button>
    );
  }
}

export default MenuTriggerComponent;
