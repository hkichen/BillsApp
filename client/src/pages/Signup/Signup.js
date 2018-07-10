import React, { Component } from 'react';

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    if (this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        })
      })
    }
  }

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
                  <label>First Name</label>
                    <input 
                      value={this.state.firstName}
                      onChange={this.handleInputChange} 
                      className="form-control" 
                      name="firstName" 
                      placeholder="First Name (required)" 
                    />
                    <label>Last Name</label>
                    <input 
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="lastName"
                      placeholder= "Last Name (required)" 
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="email"
                      placeholder="Email Address" 
                    />
                    <label>Password</label>
                    <input 
                      type="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="password"
                      placeholder= "Password" 
                    />
                </div>
                <button 
                  type="submit"
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}  
                >
                  Log In
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