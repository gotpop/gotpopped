import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';

import { connect } from 'react-redux';
import { updateUser }  from './actions/user-actions';

import Header from './components/header/header.component';
import Home from './components/home/home.component.js';
import Work from './components/work/work.component.js';
import Skills from './components/skills/skills.component.js';
import Footer from './components/footer/footer.component.js';
import Clients from './components/clients/clients.component';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser() {
        this.props.onUpdateUser('Rich');
    }

  render() {
    return (
      <div>
        <section>
          <div className="update" onClick={this.onUpdateUser}>Update User</div>
          <h1>{this.props.user}</h1> 
        </section>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
