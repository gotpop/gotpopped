import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './styles.scss';

import Header from './components/header/header.component';
import Home from './components/home/home.component.js';
import Work from './components/work/work.component.js';
import Skills from './components/skills/skills.component.js';
import Footer from './components/footer/footer.component.js';

class App extends Component {
  
  state = {
    text: "Logo",
    score: 25,
    toDashboard: false,
    formDetails: null,
    formDetails2: null,
    formDetails3: null,
    menuItems: [
      {
        key: 1,
        id: 1,
        title: "Home",
        url: "/"
      },
      {
        key: 2,
        id: 2,
        title: "Work",
        url: "/work"
      },
      {
        key: 3,
        id: 3,
        title: "Skills",
        url: "/skills"
      }
    ]
  };

  setNameInApp = (maState) => {
    console.log('maState', maState)
    this.setState({
      formDetails: maState
    });
  };
  
  setNameInApp2 = (maState) => {
    this.setState({
      formDetails2: maState
    });
  };
  
  setNameInApp3 = (maState) => {
    this.setState({
      formDetails3: maState
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <div className="ap">
          <Header menuItems={this.state.menuItems} />
          <Route exact path="/" component={Home} />
          {/* Render components to pass props */}
          <Route path="/work" render={ () => <Work setNameInApp={this.setNameInApp} />} />
          <Route path="/skills" render={ () => <Skills setNameInApp2={this.setNameInApp2} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
