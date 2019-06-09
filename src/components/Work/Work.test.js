import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Work from './Work';

configure({ adapter: new Adapter() });

describe('Work', () => {
    it('renders Work', () => {
        const work = shallow(<Work />);
        expect(work.find('main').length).toEqual(1);
    });
});
