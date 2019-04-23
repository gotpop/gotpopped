import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./button.component.scss";

class ButtonComponent extends Component {

  render() {
    return (
      <Link class="btn" to="/work">
        <span>VIEW PROJECTS</span>
        <span class="icon">

        </span>
    </Link>
    );
  }
}

export default ButtonComponent;
