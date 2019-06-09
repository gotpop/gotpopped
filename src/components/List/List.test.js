import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';

configure({ adapter: new Adapter() });

describe('List', () => {
    const item = {
        title: 'test',
        content: 'test'
    }

    it('Should render', () => {
        const list = shallow(<List item="{item}"/>);
        expect(list.find('article').length).toEqual(1);
    });
});
