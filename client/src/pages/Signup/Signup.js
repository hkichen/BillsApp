import React, { Component } from 'react';

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }),
      headers: {"Content-Type": "application/json"}
    }).then(function(){
      console.log("New user created!")
      window.location.href="/"
    });
  };


  render() {
    return (
      <div>
        <h2>Account Resgistration</h2>
        <div className="container">
          <div className="row">
            <div className="main">
              <h3>Please Fill out your information below: </h3>
              <form>
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                  <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" type="text" />

                <label htmlFor="lastName">Last Name</label>
                  <input value={this.state.lastNamee} onChange={this.handleInputChange} name="lastName" type="lastName" />

                <label htmlFor="email">Email</label>
                  <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" />
                
                <label htmlFor="password">Password</label>
                  <input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" />
                </div>
                <button 
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email &&  this.state.password)} 
                  onClick={this.handleFormSubmit}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;