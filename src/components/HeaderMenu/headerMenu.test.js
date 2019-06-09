import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HeaderMenuComponent as HeaderMenu} from './HeaderMenu';

configure({ adapter: new Adapter() });

describe('HeaderMenu', () => {
    it('Should render', () => {
        const headerMenu = shallow(<HeaderMenu />);
        expect(headerMenu.find('nav').length).toEqual(1);
    });
});
