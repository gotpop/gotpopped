import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';


function productsReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {
    return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(allReducers, 
    {
        products: [{ name: 'iphone'}],
        user: 'Liam'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log("TCL: store", store.getState())


ReactDOM.render(<App />, document.getElementById('gotPop'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
