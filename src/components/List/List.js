import React, {Component} from 'react';
import "./List.scss";
import Icon from '../Icons/Icons';

class ListComponent extends Component {
    render() {
        return (
            <li>
                <article className="client">
                    <h3>{this.props.item.name}</h3>
                    <div className="logo__wrap">
                        <Icon
                            name={this.props.item.name}
                            width="200"
                            height="100"
                            viewBox="0 0 200 50"/>
                    </div>
                </article>
            </li>
        );
    }
}

export default ListComponent;
