import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Clients from './Clients';

configure({ adapter: new Adapter() });

describe('Clients', () => {
    it('Should render', () => {
        const buttton = shallow(<Clients />);
        expect(buttton.find('main').length).toEqual(1);
    });
}); 
