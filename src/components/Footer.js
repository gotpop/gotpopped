import React, { Component } from 'react';

class Footer extends Component {

    state = {
      text: "This is the footer"
    };
  
    render() {
      return (
        <footer className="fo">
          <h2>{ this.state.text }</h2>
        </footer>
      );
    }
  }

  export default Footer;
