import React, {Component} from 'react';
import "./list.component.scss";
import Icon from '../Icons';

class ListComponent extends Component {
    render() {
        return (
            <li>
                <div>{this.props.item.name}</div>
                <Icon name={this.props.item.name}/>
            </li>
        );
    }
}

export default ListComponent;
