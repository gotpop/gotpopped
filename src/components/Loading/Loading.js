import React, {Component} from 'react';
import "./Loading.scss";

class Loading extends Component {
    render() {
        return (
            <div className={this.props.loaderActive
                ? 'lds-ripple__wrap'
                : 'lds-ripple__wrap lds-ripple__wrap--inactive'}>
                <div className={this.props.loaderActive
                ? 'lds-ripple'
                : 'lds-ripple lds-ripple--inactive'}><div></div><div></div></div>
            </div>
        );
    }
}

export default Loading;
