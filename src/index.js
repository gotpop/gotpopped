import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/user-reducer';
import productsReducer from './reducers/products-reducer';

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('gotPop'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
