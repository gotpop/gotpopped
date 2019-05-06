import React, {Component} from 'react';
import "./list.component.scss";
import {ReactComponent as Logo} from '../../assets/img/svg/logos/domestos.svg';

class ListComponent extends Component {
    render() {
        return (
            <li>
                <div>{this.props.item.name}</div>
                <div className="logo__wrap"><Logo/></div>
            </li>
        );
    }
}

export default ListComponent;
