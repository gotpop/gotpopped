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

// Import skills logos
import {ReactComponent as Angular} from '../../assets/img/svg/logos/skills/angular.svg';
import {ReactComponent as Cssgrid} from '../../assets/img/svg/logos/skills/cssgrid.svg';
import {ReactComponent as Design} from '../../assets/img/svg/logos/skills/design.svg';
import {ReactComponent as Es6} from '../../assets/img/svg/logos/skills/es6.svg';
import {ReactComponent as Git} from '../../assets/img/svg/logos/skills/git.svg';
import {ReactComponent as Html5} from '../../assets/img/svg/logos/skills/html5.svg';
import {ReactComponent as Jsdom} from '../../assets/img/svg/logos/skills/jsdom.svg';
import {ReactComponent as ReactIcon} from '../../assets/img/svg/logos/skills/react.svg';
import {ReactComponent as Redux} from '../../assets/img/svg/logos/skills/redux.svg';
import {ReactComponent as Testing} from '../../assets/img/svg/logos/skills/testing.svg';
import {ReactComponent as Vue} from '../../assets/img/svg/logos/skills/vue.svg';
import {ReactComponent as Webpack} from '../../assets/img/svg/logos/skills/webpack.svg';

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
        case "Angular":
            return <Angular {...props}/>;
        case "Cssgrid":
            return <Cssgrid {...props}/>;
        case "Design":
            return <Design {...props}/>;
        case "Es6":
            return <Es6 {...props}/>;
        case "Git":
            return <Git {...props}/>;
        case "Html5":
            return <Html5 {...props}/>;
        case "Jsdom":
            return <Jsdom {...props}/>;
        case "ReactIcon":
            return <ReactIcon {...props}/>;
        case "Redux":
            return <Redux {...props}/>;
        case "Testing":
            return <Testing {...props}/>;
        case "Vue":
            return <Vue {...props}/>;
        case "Webpack":
            return <Webpack {...props}/>;
        default:
            return <div/>;
    }
}
export default Icon;
