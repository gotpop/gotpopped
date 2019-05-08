import React, {Component} from 'react';
import "./List.scss";
import Icon from '../Icons/Icons';

class ListComponent extends Component {
    render() {
        return (
            <article className="client">
                <h3>{this.props.item.title}</h3>
                <div className={`logo__wrap logo__wrap--${this.props.item.name}`}>
                    <Icon
                        name={this.props.item.name}
                        viewBox={this.props.item.viewBox}
                        preserveAspectRatio="xMaxYMid meet"
                        shapeRendering="optimizeSpeed"/>
                </div>
            </article>
        );
    }
}

export default ListComponent;
