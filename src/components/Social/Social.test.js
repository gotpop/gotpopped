import React from 'react';
import ReactDOM from 'react-dom';
import Social from './Social';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Social />, div);
  ReactDOM.unmountComponentAtNode(div);
});
