import React, { Component } from 'react';
import "./menu-trigger.component.scss";

import { connect } from 'react-redux';
import { updateMenu }  from '../../actions/menu-actions';

class MenuTriggerComponent extends Component {

  onUpdateMenu = () => {
    let menuStatus = this.props.menu;
    this.props.onUpdateMenu(!menuStatus);
  }

  render() {
    return (
      <button onClick={this.onUpdateMenu} className="menu-trigger">
        <span className={this.props.menu ? 'menu-trigger__burger menu-trigger__burger--active': 'menu-trigger__burger'}></span>
        <span className="menu-trigger__text">Menu</span>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

const mapActionsToProps = {
  onUpdateMenu: updateMenu
};

export default connect(mapStateToProps, mapActionsToProps)(MenuTriggerComponent);
