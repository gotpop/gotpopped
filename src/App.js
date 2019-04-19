import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import Header from './components/Header';

import './styles.scss';
import Header from './components/header/header.component';



import Footer from './components/Footer';
import Home from './components/Home';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summary';

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
        url: "/step1"
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
          <Route path="/step1" render={ () => <Step1 setNameInApp={this.setNameInApp} />} />
          <Route path="/step2" render={ () => <Step2 setNameInApp2={this.setNameInApp2} />} />
          <Route path="/step3" render={ () => <Step3 setNameInApp3={this.setNameInApp3} />} />
          <Route path="/summary" render={ () => <Summary formDetails={this.state.formDetails}
                                                         formDetails2={this.state.formDetails2} 
                                                         formDetails3={this.state.formDetails3} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
