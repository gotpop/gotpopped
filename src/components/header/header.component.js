import React, {Component} from 'react';
import "./header.component.scss";
import HeaderTitle from '../header-title/header-title.component.js';
import HeaderMenu from '../header-menu/header-menu.component.js';
import MenuTrigger from '../menu-trigger/menu-trigger.component';

class Header extends Component {
    render() {
        return (
            <header className="he">
                <HeaderTitle></HeaderTitle>
                <MenuTrigger></MenuTrigger>
                <HeaderMenu></HeaderMenu>
            </header>
        );
    }
}

export default Header;
