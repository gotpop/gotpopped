import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('Should render', () => {
        const footer = shallow(<Footer />);
        expect(footer.find('footer').length).toEqual(1);
    });
}); 
