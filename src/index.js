import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import provider from 'react-redux';

function productsReducer(state = [], action) {
    return state;
}

function userReducer(state = '', {type, payload}) {

    switch (type) {
        case 'updateUser':

        return payload;
        default:
    console.log('Sorry, we are out of ');
    }
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

console.log("TCL: store", store.getState());

ReactDOM.render(<provider store={store}><App /></provider>, document.getElementById('gotPop'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
