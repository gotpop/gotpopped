import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const counter = (state = 0, action) => {

    switch(action.type) {
    
    case 'INCREMENT':
       return state = state + 1;
    
    case 'DECREMENT':
       return state = state - 1;
    
    default:
       return state;
     }
    
    };
    
    const store = createStore(counter, 
        {
            products: [{ name: 'iphone'}],
            user: 'Liam'
        },
        window.devToolsExtension && window.devToolsExtension());

    

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('gotPop'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
