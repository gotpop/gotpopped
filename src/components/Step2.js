import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Step2 extends Component {

  state = {
    title: "Add a user",
    navigateToNextPage: false,
    address1: "",
    address2: "",
    postcode: ""
  };

  handleInputChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNameInApp2(this.state);
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
      return <Redirect push to="/step3" />
    }

    return (
      <main className="ap__route ma">
        <h2 className="ma_title">{ this.state.title }</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Address</legend>
              
              <div className="field">
                <label className="field__label" htmlFor="address1">Address 1</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    id="address1"
                    required="required"
                    placeholder="1 Address house"
                    name="address1"
                    value={this.state.address1}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please add a valid address</small>
                </div>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="address2">Address 2</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    placeholder="Address street"
                    id="address2"
                    name="address2"
                    required="required"
                    value={this.state.address2}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please add a valid address</small>
                </div>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="postcode">Postcode</label>
                <div className="field__wrap">
                  <input 
                    className="field__input" 
                    type="text" 
                    id="postcode" 
                    placeholder="N1 2WW"
                    required="required"
                    name="postcode"
                    value={this.state.postcode}
                    onChange={e => this.handleInputChange(e)}
                    onBlur={e => this.checkValid(e)}
                    />
                  <svg className="field__svg"></svg>
                  <small className="field__validation">Please add a valid postcode</small>
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

  export default Step2;
