import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step1 extends Component {

    state = {
      title: "Add a user",
      navigateToNextPage: false,
      firstName: "",
      lastName: "",
      email: ""
    };

    handleInputChange = (e) => {
      this.setState({ 
        [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.setNameInApp(this.state);
      this.setState({ 
        navigateToNextPage: true
      });
    }

    checkValid = (e) => {
      if ( e.target.checkValidity() ) {
        e.target.classList.add('is-valid');
        e.target.classList.remove('is-invalid');
      } else {
        e.target.classList.add('is-invalid');
        e.target.classList.remove('is-valid');
      }
    }
    
    render() {
      // Redirect to next page
      if (this.state.navigateToNextPage === true) {
         return <Redirect push to="/step2" />
      }

      return (
        <main className="ap__route ma">
          <h2 className="ma_title">{ this.state.title }</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Personal Details</legend>
              
              <div className="field">
                <label className="field__label" htmlFor="firstName">First name</label>
                <div className="field__wrap">
                  <input 
                    className="field__input"
                    id="firstName" 
                    type="text" 
                    placeholder="John"
                    required="required"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please enter a first name</small>
                </div>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="lastName">Last name</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="Smith"
                    id="lastName"
                    required="required"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please enter a last name</small>
                </div>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="email">Email address</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text"
                    id="email"
                    placeholder="email@email.com"
                    required="required"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please enter a valid email address</small>
                </div>
              </div>
            </fieldset>
            <fieldset className="form__fieldset">
              <div className="action-row">
                <button
                  className="btn btn--secondary"
                  type="reset">Cancel</button>
                <button
                  className="btn btn--primary"
                  type="submit">Continue</button>
              </div>
            </fieldset>
          </form>
        </main>
      );
    }
  }

  export default Step1;
