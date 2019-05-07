import React, {Component} from './node_modules/react';
import {Link} from "./node_modules/react-router-dom";
import "./button.component.scss";
import Icon from "../Icons/Icons"

import {connect} from './node_modules/react-redux';
import {updateComponent} from '../../actions/update-component-actions';

class ButtonComponent extends Component {

    onRefreshComponent = () => {
        let updateComponentStatus = this.props.updateComponent;
        this
            .props
            .onRefreshComponent(!updateComponentStatus);
    }

    render() {
        return (
            <Link className="btn" to="/work" onClick={this.onRefreshComponent}>
                <span>VIEW PROJECTS</span>
                <span className="btn__icon">
                    <Icon name="Search"/>
                </span>
            </Link>
        );
    }
}

const mapStateToProps = state => ({updateComponent: state.updateComponent});

const mapActionsToProps = {
    onRefreshComponent: updateComponent
};

export default connect(mapStateToProps, mapActionsToProps)(ButtonComponent);
