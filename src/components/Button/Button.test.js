import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ButtonComponent as Button} from './Button';

configure({ adapter: new Adapter() });

it('renders button', () => {
    const buttton = shallow(<Button />);
    expect(buttton.find('span').length).toEqual(2);
});
