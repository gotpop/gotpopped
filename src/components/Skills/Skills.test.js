import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Skills from './Skills';

configure({ adapter: new Adapter() });

describe('Skills', () => {
    it('Should render', () => {
        const skills = shallow(<Skills />);
        expect(skills.find('section').length).toEqual(1);
    });
});
