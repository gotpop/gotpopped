import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import './App.scss';

import Header from './components/header/header.component';
import Home from './components/home/home.component.js';
import Work from './components/work/work.component.js';
import Skills from './components/skills/skills.component.js';
import Clients from './components/clients/clients.component';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="ap">
                    <Header/>
                    <section className="si">
                        <AnimatedSwitch
                            atEnter={{
                            offset: -100
                        }}
                            atLeave={{
                            offset: 100
                        }}
                            atActive={{
                            offset: 0
                        }}
                            mapStyles={(styles) => ({transform: `translateX(${styles.offset}%)`})}
                            className="switch-wrapper">
                            <Route exact path="/" component={Home}/>
                            <Route path="/clients" component={Clients}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/skills" component={Skills}/>
                        </AnimatedSwitch>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

export default(App);
