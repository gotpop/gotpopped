import React, {Component} from './node_modules/react';
import "./header.component.scss";
import HeaderTitle from '../HeaderTitle/header-title.component.js';
import HeaderMenu from '../HeaderMenu/header-menu.component.js';
import MenuTrigger from '../MenuTrigger/MenuTrigger';

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
