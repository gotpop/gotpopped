import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./button.component.scss";

import { connect } from 'react-redux';
import { updateComponent }  from '../../actions/update-component-actions';

class ButtonComponent extends Component {

  onRefreshComponent = () => {
    let updateComponentStatus = this.props.updateComponent;
    this.props.onRefreshComponent(!updateComponentStatus);
  }

  render() {
    return (
      <Link className="btn" to="/work" onClick={this.onRefreshComponent}>
        <span>VIEW PROJECTS</span>
        <span className="btn__icon">
          <svg enableBackground="new 42.8 191 526.3 257.1" version="1.1" viewBox="42.8 191 526.3 257.1" x="0px" y="0px">
            <g transform="translate(0,-952.36218)">
              <path d="M249.8,1143.3c-0.9,0.2-1.8,0.6-2.5,1.1l-23.5,17.8l-71.7,17.8c-60.3,0.5-109.2,49.7-109.2,110.2 c0,60.8,49.4,110.2,110.2,110.2c25,0,47.9-8.5,66.4-22.6c11-9.2,26.1-16.3,37.9-19.7c14.7-4.2,32-6.7,48.8-6.7s34.1,2.5,48.8,6.7 c11.7,3.4,26.8,10.5,37.9,19.7c18.5,14.1,41.4,22.6,66.4,22.6c60.8,0,110.2-49.4,110.2-110.2c0-60.4-48.9-109.6-109.2-110.2 l-71.7-17.8l-23.5-17.8c-0.7-0.6-1.6-1-2.5-1.1c-0.4,0-0.8,0-1.1,0H306h-55.1C250.5,1143.3,250.2,1143.3,249.8,1143.3z M252.8,1155.6H306h53.2l22.8,17c0.6,0.5,1.3,0.9,2.1,1.1l43.6,10.9c-45.5,13.5-78.8,55.7-78.8,105.6c0,21.5,6.3,41.6,17,58.5 c-2.5-0.9-5-1.7-7.6-2.5c-15.9-4.5-34.3-7.1-52.2-7.1c-18,0-36.4,2.6-52.2,7.1c-2.7,0.8-5.1,1.6-7.6,2.5c10.7-17,17-37,17-58.5 c0-49.9-33.3-92-78.8-105.6l43.6-10.9c0.8-0.2,1.5-0.6,2.1-1.1L252.8,1155.6z M153,1192.3c54.2,0,97.9,43.8,97.9,97.9 c0,54.2-43.8,97.9-97.9,97.9s-97.9-43.8-97.9-97.9C55.1,1236.1,98.8,1192.3,153,1192.3z M269.3,1192.3c-3.4,0-6.1,2.7-6.1,6.1 c0,3.4,2.7,6.1,6.1,6.1h73.4c3.4,0,6.1-2.7,6.1-6.1c0-3.4-2.7-6.1-6.1-6.1H269.3z M459,1192.3c54.2,0,97.9,43.8,97.9,97.9 c0,54.2-43.8,97.9-97.9,97.9s-97.9-43.8-97.9-97.9C361.1,1236.1,404.8,1192.3,459,1192.3z M153,1222.9c-37.1,0-67.3,30.2-67.3,67.3 s30.2,67.3,67.3,67.3s67.3-30.2,67.3-67.3S190.1,1222.9,153,1222.9z M459,1222.9c-37.1,0-67.3,30.2-67.3,67.3 c0,37.1,30.2,67.3,67.3,67.3s67.3-30.2,67.3-67.3C526.3,1253.1,496.1,1222.9,459,1222.9z M153,1235.1c30.5,0,55.1,24.6,55.1,55.1 s-24.6,55.1-55.1,55.1s-55.1-24.6-55.1-55.1S122.5,1235.1,153,1235.1z M459,1235.1c30.5,0,55.1,24.6,55.1,55.1 s-24.6,55.1-55.1,55.1c-30.5,0-55.1-24.6-55.1-55.1S428.5,1235.1,459,1235.1z"></path>
            </g>
            </svg>
        </span>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  updateComponent: state.updateComponent
});

const mapActionsToProps = {
  onRefreshComponent: updateComponent
};

export default connect(mapStateToProps, mapActionsToProps)(ButtonComponent);
