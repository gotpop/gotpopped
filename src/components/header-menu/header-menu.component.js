import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./header-menu.component.scss";

import { connect } from 'react-redux';
import { updateMenu }  from '../../actions/menu-actions';

class HeaderMenuComponent extends Component {

  onUpdateMenu = () => {
    let menuStatus = this.props.menu;
    this.props.onUpdateMenu(!menuStatus);
  }

  render() {
    return (
        <section className="he-menu__wrap">
          <nav className={this.props.menu ? 'he-menu he-menu--active': 'he-menu'}>
            <NavLink className="he-menu__item" to="/clients" activeClassName='he-menu__item--active' onClick={this.onUpdateMenu}>
              <span>CLIENTS</span>
              <span className="he-menu__icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="73.4 103.2 471.2 430.5"
                  enableBackground="new 73.4 103.2 471.2 430.5">
                  <g>
                    <path d="M538.6,533.7H391.7c-3.7,0-6.1-2.4-6.1-6.1V386.8h-153v140.8c0,3.7-2.4,6.1-6.1,6.1H79.6c-3.7,0-6.1-2.4-6.1-6.1V255.9 c0-1.8,1.2-4.3,3.1-4.9L306,104.1c1.8-1.2,4.9-1.2,6.7,0l228.9,147.5c1.8,1.2,3.1,3.1,3.1,4.9v271.1 C544.7,531.3,542.2,533.7,538.6,533.7z M397.8,521.5h134.6V260.1L309.7,116.3l-224,142.6v262.5h134.6V380.7c0-3.7,2.4-6.1,6.1-6.1 h165.2c3.7,0,6.1,2.4,6.1,6.1V521.5z"></path>
                  </g>
                </svg>
              </span>
            </NavLink>
            <NavLink className="he-menu__item" to="/work" activeClassName='he-menu__item--active' onClick={this.onUpdateMenu}>
              <span>WORK</span>
              <span className="he-menu__icon">
                <svg version="1.1" x="0px" y="0px" viewBox="37.5 170.9 537 297.2" enableBackground="new 37.5 170.9 537 297.2">
                  <g transform="translate(0,-952.36218)">
                    <path d="M342.9,1123.3L257.2,1417l11.9,3.4l85.7-293.8L342.9,1123.3L342.9,1123.3z M192.6,1174.7l-146.9,91.8l-8.2,5.4l8.2,5.2 l146.9,91.8l6.5-10.5l-138.5-86.4l138.5-86.6L192.6,1174.7z M419.4,1174.7l-6.5,10.5l138.5,86.6l-138.5,86.4l6.5,10.5l146.9-91.8 l8.2-5.2l-8.2-5.4L419.4,1174.7z"></path>
                  </g>
                </svg>
              </span>
            </NavLink>
            <NavLink className="he-menu__item" to="/skills" activeClassName='he-menu__item--active' onClick={this.onUpdateMenu}>
                <span>SKILLS</span>
                <span className="he-menu__icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="103.9 117.4 404.8 404.7"
                    enableBackground="new 103.9 117.4 404.8 404.7">
                    <path d="M487.8,397.2c-20.8-20.8-50.2-26.9-77.1-17.1l-78.3-77.7l91.8-91.8l21.4,5.5c2.4,0.6,4.9-0.6,6.7-2.4l42.8-61.2 c1.8-2.4,1.2-5.5-0.6-8l-12.2-12.2c-1.8-1.8-5.5-2.4-8-0.6l-61.2,42.8c-1.8,1.2-3.1,4.3-2.4,6.7l5.5,21.4l-91.8,91.8l-78.9-78.3 c9.8-26.9,3.7-56.9-17.1-77.7c-20.2-20.8-56.3-26.9-84.5-14.7c-3.7,1.8-4.9,6.7-1.8,9.8l29.4,29.4v22h-22l-28.8-28.8 c-3.1-3.1-8-1.8-9.8,1.8c-12.2,28.2-6.1,63.6,14.7,84.5s50.2,26.9,77.1,17.1l77.7,77.1l-25.1,25.1c-12.2-8-27.5-5.5-37.9,4.3 L112.6,469.4c-11.6,11.6-11.6,31.2,0,43.5s31.2,12.2,43.5,0l104.7-103.4c10.4-10.4,11.6-26.9,3.7-39.2l25.1-25.1l77.7,78.3 c-9.8,26.9-3.7,56.9,17.1,77.7c20.8,20.2,56.3,26.9,84.5,14.1c3.7-1.8,4.9-6.7,1.8-9.8l-30-29.4v-22h22l30,29.4 c3.1,3.1,8,1.8,9.8-1.8C514.7,453.5,508.6,418,487.8,397.2z M476.7,143.9l4.9,4.9L444.3,202l-13.5-3.1l18.4-18.4 c3.1-3.1-1.2-7.3-4.3-4.3l-18.4,18.4l-3.1-13.5L476.7,143.9z M251.5,400.9l-104,103.4c-7.3,7.3-19,7.3-25.7,0 c-7.3-7.3-7.3-19,0-25.7l104.7-103.4c7.3-7.3,19-7.3,25.7,0C258.9,381.9,258.9,393.6,251.5,400.9z M493.9,468.2l-24.5-24.5 c-1.2-1.2-2.4-1.8-4.3-1.8h-30.6c-3.7,0-6.1,2.4-6.1,6.1v30.6c0,1.8,0.6,3.1,1.8,4.3l25.1,24.5c-22,6.1-47.1,0-62.4-15.3 c-17.7-17.7-22.6-44.7-12.9-67.9c1.2-2.4,0.6-4.9-1.2-6.7L208.1,247.9c-1.8-1.8-4.3-2.4-6.7-1.2c-23.3,10.4-49.6,4.9-67.9-12.9 c-15.3-15.3-20.8-40.4-15.3-62.4l23.9,23.9c1.2,1.2,2.4,1.8,4.3,1.8h30.6c3.7,0,6.1-2.4,6.1-6.1v-30.6c0-1.8-0.6-3.1-1.8-4.3 l-23.9-23.9c22-6.1,47.1,0,62.4,15.3c17.7,17.7,22.6,44.7,12.9,67.9c-1.2,2.4-0.6,4.9,1.2,6.7l170.7,169.5c1.8,1.8,4.3,2.4,6.7,1.2 c23.3-10.4,49.6-4.9,67.9,12.9C494.5,421.1,500,446.2,493.9,468.2z"></path>
                  </svg>
                </span>
            </NavLink>
        </nav>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

const mapActionsToProps = {
  onUpdateMenu: updateMenu
};

export default connect(mapStateToProps, mapActionsToProps)(HeaderMenuComponent);
