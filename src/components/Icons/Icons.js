import React from 'react';

// Import logos
import {ReactComponent as Domestos} from '../../assets/img/svg/logos/clients/domestos.svg';
import {ReactComponent as Mercedes} from '../../assets/img/svg/logos/clients/mercedes.svg';
import {ReactComponent as Aetna} from '../../assets/img/svg/logos/clients/aetna.svg';
import {ReactComponent as Columbus} from '../../assets/img/svg/logos/clients/columbus.svg';
import {ReactComponent as Magnum} from '../../assets/img/svg/logos/clients/magnum.svg';
import {ReactComponent as Discovery} from '../../assets/img/svg/logos/clients/discovery.svg';
import {ReactComponent as Virgin} from '../../assets/img/svg/logos/clients/virgin.svg';

// Import icons
import {ReactComponent as Gotpop} from '../../assets/img/svg/logos/site/gotpop.svg';
import {ReactComponent as Clients} from '../../assets/img/svg/icons/clients.svg';
import {ReactComponent as Code} from '../../assets/img/svg/icons/code.svg';
import {ReactComponent as Skills} from '../../assets/img/svg/icons/skills.svg';
import {ReactComponent as Search} from '../../assets/img/svg/icons/search.svg';
import {ReactComponent as Codepen} from '../../assets/img/svg/icons/codepen.svg';
import {ReactComponent as Github} from '../../assets/img/svg/icons/github.svg';
import {ReactComponent as Linkedin} from '../../assets/img/svg/icons/linkedin.svg';

const Icon = props => {
    switch (props.name) {
        case "Gotpop":
            return <Gotpop {...props}/>;
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
        case "Search":
            return <Search {...props}/>;
        case "Clients":
            return <Clients {...props}/>;
        case "Code":
            return <Code {...props}/>;
        case "Codepen":
            return <Codepen {...props}/>;
        case "Github":
            return <Github {...props}/>;
        case "Linkedin":
            return <Linkedin {...props}/>;
        case "Skills":
            return <Skills {...props}/>;
        default:
            return <div/>;
    }
}
export default Icon;
