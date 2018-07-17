import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Landing.css'



class Landing extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      //do so sort of get from DB and verification
    }
  };

  render() {
    return (

      <div className="bg-img">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              <div className="card text-center" id="sign-up">
                <h3>
                  <Link to="/signup" id="link-text">
                    Sign Up
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card" id="log-in">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Username or email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                      />
                    </div>
                    <button className="btn-warning btn-lg" type="submit">
                      Log In
                    </button>
                  </form>
                </div>
              </div>

      
            </div>
            
        </div>
      
    );
  }
}

export default Landing;
