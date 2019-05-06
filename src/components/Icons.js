import React from 'react';
import {ReactComponent as Domestos} from '../assets/img/svg/logos/domestos.svg';
import {ReactComponent as Mercedes} from '../assets/img/svg/logos/mercedes.svg';
import {ReactComponent as Aetna} from '../assets/img/svg/logos/aetna.svg';
import {ReactComponent as Columbus} from '../assets/img/svg/logos/columbus.svg';
import {ReactComponent as Magnum} from '../assets/img/svg/logos/magnum.svg';
import {ReactComponent as Discovery} from '../assets/img/svg/logos/discovery.svg';
import {ReactComponent as Virgin} from '../assets/img/svg/logos/virgin.svg';

const Icon = props => {
    switch (props.name) {
        case "Domestos":
            return <Domestos {...props}/>;
        case "Mercedes":
            return <Mercedes {...props}/>;
        case "Aetna":
            return <Aetna {...props}/>;
        case "Columbus":
            return <Columbus {...props}/>;
        case "Magnum":
            return <Magnum {...props}/>;
        case "Discovery":
            return <Discovery {...props}/>;
        case "Virgin":
            return <Virgin {...props}/>;
        default:
            return <div/>;
    }
}
export default Icon;
