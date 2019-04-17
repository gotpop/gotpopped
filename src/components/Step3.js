import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step3 extends Component {

  state = {
    title: "Add a user",
    navigateToNextPage: false,
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNameInApp3(this.state);
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
      return <Redirect push to="./summary/" />
    }
   
    return (
      <main className="ap__route ma">
        <h2 className="ma_title">{ this.state.title }</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Login</legend>
            
            <div className="field">
              <label className="field__label" htmlFor="username">Username</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text"
                  id="username"
                  placeholder="myusername"
                  required="required"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleInputChange(e)}
                  onBlur={e => this.checkValid(e)}
                  />
                <svg className="field__svg"></svg>
                <small className="field__validation">Please add a valid username</small>
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="password">Password</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text"
                  required="required"
                  id="password"
                  placeholder="Smith"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleInputChange(e)}
                  onBlur={e => this.checkValid(e)}
                  />
                <svg className="field__svg"></svg>
                <small className="field__validation">Please add a valid password</small>
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="confirmPassword">Email address</label>
              <div className="field__wrap">
                <input 
                  className="field__input" 
                  type="text"
                  required="required"
                  id="confirmPassword"
                  placeholder="email@email.com"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={e => this.handleInputChange(e)}
                  onBlur={e => this.checkValid(e)}
                  />
                <svg className="field__svg"></svg>
                <small className="field__validation">Please add a valid email address</small>
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
                type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Step3;
