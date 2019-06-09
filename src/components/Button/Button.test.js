import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ButtonComponent as Button} from './Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
    it('Should render', () => {
        const buttton = shallow(<Button />);
        expect(buttton.find('span').length).toEqual(2);
    });
}); 
