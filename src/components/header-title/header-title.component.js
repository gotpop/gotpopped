import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./header-title.component.scss";

class HeaderTitle extends Component {
  render() {
    return (
      <section className="header-logo-wrap">
      <Link className="he-logo__link" to="/">
      <h1 className="header-title">GotPop</h1>
      <span className="icon">
        Icon here
      </span>
      </Link>
    </section>
    );
  }
}

export default HeaderTitle;
