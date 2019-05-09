import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Icon from "../Icons/Icons";
import "./HeaderTitle.scss";

import {connect} from 'react-redux';
import {updateComponent} from '../../actions/update-component-actions';

class HeaderTitle extends Component {

    onRefreshComponent = () => {
        let updateComponentStatus = this.props.updateComponent;
        this
            .props
            .onRefreshComponent(!updateComponentStatus);
    }

    render() {
        return (
            <section className="he-logo__wrap">
                <NavLink
                    className="he-logo__link"
                    to="/"
                    exact={true}
                    activeClassName='he-logo__link--active'
                    onClick={this.onRefreshComponent}>
                        <Icon name="gotpop"/>
                    </NavLink>
            </section>
        );
    }
}

const mapStateToProps = state => ({updateComponent: state.updateComponent});

const mapActionsToProps = {
    onRefreshComponent: updateComponent
};

export default connect(mapStateToProps, mapActionsToProps)(HeaderTitle);
