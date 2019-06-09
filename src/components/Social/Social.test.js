import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Social from './Social';

configure({ adapter: new Adapter() });

describe('Social', () => {
    it('Should render', () => {
        const social = shallow(<Social />);
        expect(social.find('section').length).toEqual(1);
    });
});
