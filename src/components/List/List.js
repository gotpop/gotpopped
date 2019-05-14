import React, {Component} from 'react';
import "./List.scss";
import Icon from '../Icons/Icons';

class ListComponent extends Component {
    render() {
        return (
            <article className="item">
                <div className={`item__logo-wrap item__logo-wrap--${this.props.item.name}`}>
                    <Icon
                        className={`item__logo-icon item__logo-icon--${this.props.item.name}`}
                        name={this.props.item.name}
                        viewBox={this.props.item.viewBox}
                        preserveAspectRatio="xMaxYMid meet"/>
                </div>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.content}</p>
            </article>
        );
    }
}

export default ListComponent;
