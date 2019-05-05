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
      <button onClick={this.onUpdateMenu} className="mobile-menu-trigger">
        <span className="mobile-menu-trigger-burger"></span>
        <span className="mobile-menu-trigger-text">Menu</span>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  menu: state.menu
});

const mapActionsToProps = {
  onUpdateMenu: updateMenu
};

export default connect(mapStateToProps, mapActionsToProps)(MenuTriggerComponent);
