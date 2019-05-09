import React from 'react';

// Import logos
import {ReactComponent as Domestos} from '../../assets/img/svg/logos/clients/domestos.svg';
import {ReactComponent as Mercedes} from '../../assets/img/svg/logos/clients/mercedes.svg';
import {ReactComponent as Aetna} from '../../assets/img/svg/logos/clients/aetna.svg';
import {ReactComponent as Columbus} from '../../assets/img/svg/logos/clients/columbus.svg';
import {ReactComponent as Magnum} from '../../assets/img/svg/logos/clients/magnum.svg';
import {ReactComponent as Discovery} from '../../assets/img/svg/logos/clients/discovery.svg';
import {ReactComponent as Virgin} from '../../assets/img/svg/logos/clients/virgin.svg';
import {ReactComponent as Unilever} from '../../assets/img/svg/logos/clients/unilever.svg';

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
        case "gotpop":
            return <Gotpop {...props}/>;
        case "domestos":
            return <Domestos {...props}/>;
        case "mercedes":
            return <Mercedes {...props}/>;
        case "aetna":
            return <Aetna {...props}/>;
        case "columbus":
            return <Columbus {...props}/>;
        case "magnum":
            return <Magnum {...props}/>;
        case "discovery":
            return <Discovery {...props}/>;
        case "virgin":
            return <Virgin {...props}/>;
        case "unilever":
            return <Unilever {...props}/>;
        case "search":
            return <Search {...props}/>;
        case "clients":
            return <Clients {...props}/>;
        case "code":
            return <Code {...props}/>;
        case "codepen":
            return <Codepen {...props}/>;
        case "github":
            return <Github {...props}/>;
        case "linkedin":
            return <Linkedin {...props}/>;
        case "skills":
            return <Skills {...props}/>;
        case "angular":
            return <Angular {...props}/>;
        case "cssgrid":
            return <Cssgrid {...props}/>;
        case "design":
            return <Design {...props}/>;
        case "es6":
            return <Es6 {...props}/>;
        case "git":
            return <Git {...props}/>;
        case "html5":
            return <Html5 {...props}/>;
        case "jsdom":
            return <Jsdom {...props}/>;
        case "reactIcon":
            return <ReactIcon {...props}/>;
        case "redux":
            return <Redux {...props}/>;
        case "testing":
            return <Testing {...props}/>;
        case "vue":
            return <Vue {...props}/>;
        case "webpack":
            return <Webpack {...props}/>;
        default:
            return <div/>;
    }
}
export default Icon;
