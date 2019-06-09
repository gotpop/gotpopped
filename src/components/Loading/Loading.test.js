import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './Loading';

configure({ adapter: new Adapter() });

describe('Loading', () => {
    const loaderActive = true;

    it('Should render', () => {
        const loading = shallow(<Loading item="{loaderActive}"/>);
        expect(loading.find('div').length).toEqual(4);
    });
});
