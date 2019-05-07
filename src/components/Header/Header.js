import React, {Component} from 'react';
import "./Header.scss";

import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
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
