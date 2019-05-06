import React, {Component} from 'react';
import "./list.component.scss";
// import {ReactComponent as Logo} from '../../assets/img/svg/logos/domestos.svg';
import Icon from '../Icons';


class ListComponent extends Component {
    render() {
        return (
            <li>
                <div>{this.props.item.name}</div>
                <h1>Icon</h1>
                <Icon name="Domestos"/>
            </li>
        );
    }
}

export default ListComponent;
