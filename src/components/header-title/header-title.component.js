import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import logo from '../../assets/img/logo.svg';

import "./header-title.component.scss";

class HeaderTitle extends Component {
  render() {
    return (
      <section className="he-logo__wrap">
      <NavLink className="he-logo__link" to="/" exact={true} activeClassName='he-logo__link--active'>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="70" viewBox="0 0 79.37 18.52">
          <path d="M65.04 18.47l.2-.79a5365.7 5365.7 0 0 0 3.1-12.7l.11-.43h1.79c1.64 0 1.78 0 1.78.03s-.07.38-.18.79a9.87 9.87 0 0 0-.17.74c.01 0 .08-.06.15-.14a4.68 4.68 0 0 1 2.6-1.58c.3-.05.94-.06 1.28 0 .74.1 1.43.44 1.86.91.49.52.79 1.23.93 2.15a8.35 8.35 0 0 1-.97 5.02A5.31 5.31 0 0 1 74 15.25c-.25.05-.36.06-.86.05a3.16 3.16 0 0 1-2.34-.84 3.26 3.26 0 0 1-.75-1.25c-.09-.26-.08-.28-.2.28a855.24 855.24 0 0 1-1.22 4.96c-.01.04-.12.04-1.8.04h-1.8zm7.41-5.12c.3-.1.5-.23.76-.5.72-.73 1.24-1.97 1.51-3.63.07-.4.07-.5.07-1.06s0-.63-.05-.82c-.2-.73-.66-1.1-1.36-1.1-.86 0-1.6.76-2.2 2.22a9.1 9.1 0 0 0-.59 2.77c-.06 1.43.5 2.26 1.49 2.2.1-.01.27-.04.37-.08zM6.65 15.3a7.24 7.24 0 0 1-4.74-2.07A6.46 6.46 0 0 1 .23 9.67a8.64 8.64 0 0 1 0-2.08 8.2 8.2 0 0 1 1.94-4.24A9.45 9.45 0 0 1 8.33.16c.42-.04 1.4-.04 1.78 0 1.29.12 2.42.56 3.32 1.25.23.18.67.6.86.83a5.49 5.49 0 0 1 1.15 2.77c.04.34.06 1.01.04 1.19l-.02.15h-1.13l-1.14-.02v-.45a5.04 5.04 0 0 0-.24-1.56 3.18 3.18 0 0 0-2.55-2.27 5.73 5.73 0 0 0-1.19-.02c-2.19.21-3.94 1.99-4.59 4.67a6.96 6.96 0 0 0-.23 2.11c0 .86.03 1.24.18 1.82.4 1.64 1.33 2.65 2.7 2.96.85.2 2.05.04 2.81-.34.1-.06.1-.03.23-.6a315.45 315.45 0 0 1 .71-3.02c0-.02-.33-.03-1.25-.03H8.53l.05-.22A1092.83 1092.83 0 0 0 9 7.72c.03-.03.69-.03 3.16-.03h3.13v.05l-.03.15-.2.79a2404.8 2404.8 0 0 1-1.5 6.22l-.11.42h-1.5l-.4-.27-.63-.44-.22-.15-.24.12c-.73.35-1.3.54-2.06.66a16.56 16.56 0 0 1-1.75.06zm14.75 0a5.12 5.12 0 0 1-4.52-4.93c0-.54.03-.81.15-1.3a6.5 6.5 0 0 1 4.69-4.53 5.47 5.47 0 0 1 3.92.37 5.23 5.23 0 0 1 2.07 1.93c.27.48.47 1.06.58 1.6.08.45.08 1.2 0 1.66a5.95 5.95 0 0 1-1.67 3.18 6.58 6.58 0 0 1-5.22 2.02zm.77-1.49c.3-.07.5-.2.8-.5.4-.39.7-.86 1-1.56.37-.9.63-1.9.79-3.03.05-.34.06-.56.06-1.03 0-.55 0-.63-.06-.8-.2-.73-.64-1.06-1.37-1.07-.33 0-.55.07-.83.25-.88.6-1.64 2.22-2 4.33a7.8 7.8 0 0 0-.08 2.35c.14.59.51.98 1.06 1.08.2.03.45.02.63-.02zm10.72 1.5a6.6 6.6 0 0 1-.8-.18 2.59 2.59 0 0 1-1.84-2.18c-.05-.3-.02-.98.05-1.29a589.15 589.15 0 0 1 1.34-5.4l-.75-.01c-.7 0-.75 0-.75-.05l.2-.85.2-.79.77-.01h.77l.9-.88a824.47 824.47 0 0 0 1.77-1.73l.15-.13h.76c.41 0 .75 0 .75.02a94.68 94.68 0 0 1-.64 2.67c0 .04.16.04 1.49.04 1.03 0 1.5.01 1.5.03l-.4 1.58-.02.1h-3.03l-.76 3.04a255.46 255.46 0 0 0-.79 3.25c-.06.27-.05.52.02.65.12.19.44.27.72.19a.67.67 0 0 0 .32-.2c.3-.33.54-.9.99-2.43l.06-.2h.79c.44 0 .8 0 .8.02a11.16 11.16 0 0 1-.84 2.55c-.52 1.08-1.17 1.75-1.97 2.03-.36.12-.56.15-1.13.16h-.64zm24.86-.05a5.1 5.1 0 0 1-4.17-3.98 5.91 5.91 0 0 1-.05-1.45 6.2 6.2 0 0 1 3.39-4.74 6.81 6.81 0 0 1 2.25-.7 5.16 5.16 0 0 1 5.06 2.26 4.97 4.97 0 0 1 .37 4.6 6.71 6.71 0 0 1-5.93 4.06c-.53 0-.62 0-.92-.05zm1-1.44c1.01-.18 1.95-1.73 2.47-4.07.18-.85.3-1.95.23-2.46a2.07 2.07 0 0 0-.2-.77c-.2-.4-.54-.64-1.03-.7-.54-.05-.94.12-1.38.55-.77.79-1.42 2.45-1.68 4.34a9.73 9.73 0 0 0-.1 1.6c.04.5.18.92.43 1.18.3.3.8.42 1.26.33zM38.91 15.1l.21-.91A51919.43 51919.43 0 0 1 42.56.37l.02-.06h3.24c2.84.01 3.29.02 3.62.06 1.51.17 2.64.63 3.41 1.37.53.51.85 1.12.95 1.84.06.37.06.6 0 .93a3.85 3.85 0 0 1-1.4 2.43 7.8 7.8 0 0 1-3.3 1.5c-.98.2-1.9.28-3.66.28h-1.16l-.02.08-.08.3a2741.84 2741.84 0 0 0-1.14 4.6l-.34 1.42h-1.9c-1.48 0-1.9 0-1.9-.03zm8.13-8.32c1.19-.15 2.14-.75 2.51-1.6.16-.35.2-.51.2-.93.03-.44-.01-.67-.17-.98a1.7 1.7 0 0 0-.74-.71c-.53-.26-.8-.3-1.98-.32l-.95-.01-.24.95-.89 3.6c0 .04.05.04.99.04.7 0 1.06 0 1.28-.04z"/>
        </svg>
      </NavLink>
    </section>
    );
  }
}

export default HeaderTitle;
