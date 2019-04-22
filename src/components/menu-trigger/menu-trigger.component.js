import React, { Component } from 'react';

import "./menu-trigger.component.scss";

class MenuTriggerComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<a id="mobileMenuTrigger" class="mobile-menu-trigger">
  <span class="mobile-menu-trigger-burger"></span>
  <span class="mobile-menu-trigger-text">Menu</span>
</a>

    );
  }
}

export default MenuTriggerComponent;
