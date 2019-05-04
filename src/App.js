import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';

import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Home from './components/home/home.component.js';
import Work from './components/work/work.component.js';
import Skills from './components/skills/skills.component.js';
import Footer from './components/footer/footer.component.js';
import Clients from './components/clients/clients.component';

function mapStateToProps(state) {

    return {
        count: state
    };

}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({
            type: 'INCREMENT'
        }),
        decrement: () => dispatch({
            type: 'DECREMENT'
        })
    };

}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ap">
          <Header/>
          <section className="si">
            <Route exact path="/" component={Home} />
            <Route path="/clients" render={ () => <Clients/>} />
            <Route path="/work" render={ () => <Work/>} />
            <Route path="/skills" render={ () => <Skills/>} />
            <Footer />
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
