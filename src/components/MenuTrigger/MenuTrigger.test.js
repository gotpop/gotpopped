import React from 'react';
import ReactDOM from 'react-dom';
import MenuTrigger from './MenuTrigger';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuTrigger />, div);
  ReactDOM.unmountComponentAtNode(div);
});
