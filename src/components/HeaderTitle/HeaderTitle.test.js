import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HeaderTitle } from './HeaderTitle';

configure({ adapter: new Adapter() });

describe('HeaderTitle', () => {
    it('Should render', () => {
        const headerTitle = shallow(<HeaderTitle />);
        expect(headerTitle.find('NavLink').length).toEqual(1);
    });
});
