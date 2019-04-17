import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Summary extends Component {

    state = {
      text: "Success!",
      summaryText: "Summary"
    };
  
    render() {
      return (
        <main className="ap__route ma">
          <section className="ma__content">
            <h2 className="ma_title">{ this.state.text }</h2>
            <p>You've added a user.</p>
          </section>
          
          <section className="summary">
            <h2 className="summary__title">{ this.state.summaryText }</h2>
            <p>Here's the user.</p>
            <ul className="summary__list">
              <li className="summary__item">
                <span className="summary__key">First name:</span>
                <span className="summary__value">{ this.props.formDetails.firstName }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Last name:</span>
                <span className="summary__value">{ this.props.formDetails.lastName }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Email:</span>
                <span className="summary__value">{ this.props.formDetails.email }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Address 1:</span>
                <span className="summary__value">{ this.props.formDetails2.address1 }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Address 2:</span>
                <span className="summary__value">{ this.props.formDetails2.address2 }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Post code:</span>
                <span className="summary__value">{ this.props.formDetails2.postcode }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">User name:</span>
                <span className="summary__value">{ this.props.formDetails3.username }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Password:</span>
                <span className="summary__value">{ this.props.formDetails3.password }</span>
              </li>
              <li className="summary__item">
                <span className="summary__key">Confirm Password:</span>
                <span className="summary__value">{ this.props.formDetails3.confirmPassword }</span>
              </li>
            </ul>
          </section>
          <div className="action-row">
            <Link className="btn btn--primary" to="/">Continue to home page</Link>
          </div>
        </main>
      );
    }
}

export default Summary;
