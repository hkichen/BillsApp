import React, { Component } from 'react';
import './Signup.css';


class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    monthlyIncome: 0,
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
        monthlyIncome: this.state.monthlyIncome,
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
      <div className="container">
        <h2 className="title">Account Resgistration</h2>
        <h3 className="instructions">Please Fill out your information below: </h3>
        <form className="signup">
            <label>First Name</label>
            <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" type="text" />
          <br/>
            <label>Last Name</label>
            <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" type="lastName" />
          <br/>
            <label>Monthly Income</label>
            <input value={this.state.monthlyIncome} onChange={this.handleInputChange} name='monthlyIncome' type="number" />
          <br/>
            <label>Email</label>
            <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" />
          <br/>
            <label>Password</label>
            <input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" />
          <br/>
          <button className="btn-success"
            disabled={!(this.state.firstName && this.state.lastName && this.state.email &&  this.state.password)} 
            onClick={this.handleFormSubmit}>
            Create Account
          </button>
        </form>
      </div>
    )
  }
}

export default Signup;