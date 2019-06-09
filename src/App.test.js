import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';

configure({ adapter: new Adapter() });

it('renders button', () => {
    const app = shallow(<App />);
    expect(app.find('div').length).toEqual(1);
});
