import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('Should render', () => {
        const home = shallow(<Home />);
        expect(home.find('main').length).toEqual(1);
    });
});
