import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './HeaderMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
