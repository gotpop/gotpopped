import React, { Component } from 'react';
import { ReactComponent as MyLogoGithub }  from '../assets/logo-github.svg';
import { ReactComponent as MyLogoGrid }  from '../assets/logo-grid.svg';
import MenuItem from './MenuItem';
import { Link } from "react-router-dom";

class Header extends Component {

    state = {
      text: "React Grid",
      altText: "Click here to see this project on Github",
    };

    render() {
      return (
        <header className="he">
          <section className="he-logo">
            <Link className="he-logo__link" to="/">
              <h2 className="he-logo__title">{ this.state.text }</h2>
              <MyLogoGrid className="he-nav__svg" />
            </Link>
          </section>
          <div className="he-nav">
            <nav className="he-nav__bar">
              {this.props.menuItems.map( player => 
                <MenuItem 
                  player={player}
                  key={player.id}
                />
              )}
            </nav>
            <div className="he-nav__image-wrap">
              <a className="he-nav__link-ext" target="_blank" rel="noopener noreferrer" href="https://github.com/gotpop/an.react">
                <MyLogoGithub className="he-nav__image" />
              </a>
            </div>
          </div>
        </header>
      );
    }
  }

  export default Header;
