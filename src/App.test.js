import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import menuReducer from './reducers/menu-reducer';
import updateComponentReducer from './reducers/update-component-reducer';

const allReducers = combineReducers({menu: menuReducer, updateComponent: updateComponentReducer});

const store = createStore(allReducers, {
    menu: false,
    updateComponent: false
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
