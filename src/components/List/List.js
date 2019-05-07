import React, {Component} from 'react';
import "./List.scss";
import Icon from '../Icons/Icons';

class ListComponent extends Component {
    render() {
        return (
            <li>
                <article className="client">
                    <h3>{this.props.item.name}</h3>
                    <div className={`logo__wrap logo__wrap--${this.props.item.name}`}>
                        <Icon
                            name={this.props.item.name}
                            viewBox={this.props.item.viewBox}/>
                    </div>
                </article>
            </li>
        );
    }
}

export default ListComponent;
