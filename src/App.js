import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Clients from './components/Clients/Clients';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="ap">
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/clients" component={Clients}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/skills" component={Skills}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default(App);
