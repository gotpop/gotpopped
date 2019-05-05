import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import menuReducer from './reducers/menu-reducer';
import updateComponentReducer from './reducers/update-component-reducer';

const allReducers = combineReducers({
    menu: menuReducer,
    updateComponent: updateComponentReducer
});

const store = createStore(allReducers, 
    {
        menu: true,
        updateComponent: false
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('gotPop'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
