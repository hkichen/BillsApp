import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'


class Landing extends Component {
  state = {
    email:  "",
    password: ""
  }

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
  }

  render() {
    return (
      <div className="container">
        <h2 className="greeting">Welcome to Bill Buster</h2>
        <div className="main">
          <h3 className="instructions">
            Please Log In, or <Link to="/signup">Sign Up</Link>
          </h3>
          <form>
            <div className="form-group">
              <label>Username or email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
              />
            </div>
            <button className="btn-success" type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Landing;
