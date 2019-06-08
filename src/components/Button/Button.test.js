import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import menuReducer from '../../reducers/menu-reducer';
import updateComponentReducer from '../../reducers/update-component-reducer';

const allReducers = combineReducers({menu: menuReducer, updateComponent: updateComponentReducer});

const store = createStore(allReducers, {
    menu: false,
    updateComponent: false
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

it('renders button', () => {
    const button = shallow(<Button store={store}/>).dive().dive();
    expect(button.find('span').length).toEqual(2);
});
