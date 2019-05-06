import React from 'react';
// import Phone from './Phone';
// import Messages from './Messages';
import {ReactComponent as Domestos} from '../assets/img/svg/logos/domestos.svg';

const Icon = props => {
  switch(props.name) {
    case "Domestos":
      return <Domestos {...props} />;
    case "messages":
      return 'Test';
    default:
      return <div />;
  }
}
export default Icon;
