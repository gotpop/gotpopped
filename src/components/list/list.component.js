import React, {Component} from 'react';
import "./list.component.scss";

class ListComponent extends Component {
    render() {
        return (
            <li>
                <div>{this.props.item.name}</div>
            </li>
        );
    }
}

export default ListComponent;
