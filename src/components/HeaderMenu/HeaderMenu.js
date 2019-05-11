import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Icon from "../Icons/Icons";
import "./HeaderMenu.scss";
import {connect} from 'react-redux';
import {updateMenu} from '../../actions/menu-actions';
import {updateComponent} from '../../actions/update-component-actions';

class HeaderMenuComponent extends Component {

    onUpdateMenu = () => {
        let menuStatus = this.props.menu;
        this
            .props
            .onUpdateMenu(!menuStatus);
    }

    onRefreshComponent = () => {
        // Force active menu to update
        this.forceUpdate();
    }

    closeMenu = () => {
        this.forceUpdate();
        let mql = window
            .matchMedia('(max-width: 900px)')
            .matches;
        if (mql) {
            this
                .props
                .onUpdateMenu(false);
        }
    }

    render() {
        return (
            <section className="he-menu__wrap">
                <nav
                    className={this.props.menu
                    ? 'he-menu he-menu--active'
                    : 'he-menu'}>
                    <NavLink
                        className="he-menu__item"
                        to="/clients"
                        activeClassName='he-menu__item--active'
                        onClick={this.closeMenu}>
                        <span>CLIENTS</span>
                        <span className="he-menu__icon">
                            <Icon viewBox="0 0 75 65" name="clients"/>
                        </span>
                    </NavLink>
                    <NavLink
                        className="he-menu__item"
                        to="/work"
                        activeClassName='he-menu__item--active'
                        onClick={this.closeMenu}>
                        <span>WORK</span>
                        <span className="he-menu__icon">
                            <Icon name="code"/>
                        </span>
                    </NavLink>
                    <NavLink
                        className="he-menu__item"
                        to="/skills"
                        activeClassName='he-menu__item--active'
                        onClick={this.closeMenu}>
                        <span>SKILLS</span>
                        <span className="he-menu__icon">
                            <Icon name="skills"/>
                        </span>
                    </NavLink>
                </nav>
            </section>
        );
    }
}

const mapStateToProps = state => ({menu: state.menu, updateComponent: state.updateComponent});

const mapActionsToProps = {
    onUpdateMenu: updateMenu,
    onRefreshComponent: updateComponent
};

export default connect(mapStateToProps, mapActionsToProps)(HeaderMenuComponent);
