import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header/header.component';
import Home from './components/home/home.component.js';
import Work from './components/work/work.component.js';
import Skills from './components/skills/skills.component.js';
import Footer from './components/footer/footer.component.js';
import Clients from './components/clients/clients.component';

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

export default (App);
