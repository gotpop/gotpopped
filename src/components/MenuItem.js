import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Button extends Component {
    render() {
      return (
        <NavLink exact to={ this.props.player.url } className="he-nav__item">{ this.props.player.title }</NavLink>
      );
    }
  }

export default Button;


