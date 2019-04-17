import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    state = {
      text: "Multi Step React Grid."
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <section className="ma__content">
            <h2 className="ma_title">{ this.state.text }</h2>
            <p>This is a multi step form demo built with React and CSS Grid.</p>
            <p>You can add a user by clicking on the link below. Fill out each step and you will see the summary displayed on the final page. If you prefer you can use the links in the header to navigate thorugh the application at your convenience.</p>
          </section>
          <Link className="btn btn--primary" to="/step1">Get started!</Link>
        </main>
      );
    }
  }

  export default Home;
