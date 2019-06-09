import React from 'react';
import ReactDOM from 'react-dom';
import Icons from './Icons';

describe('Icons', () => {
    it('Should render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Icons name='gotpop'/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
