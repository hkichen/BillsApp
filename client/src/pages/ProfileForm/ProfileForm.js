import React, { Component } from 'react';4

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: "", 
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        };
      }
    
      componentDidMount() {
        fetch('/api/users/' + this.props.match.params.id)
          .then(res => res.json())
          .then(user => this.setState(user))
      }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = (event) => {
        event.preventDefault();
    
        fetch('/api/users/' + this.props.match.params.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          }),
          headers: {"Content-Type": "application/json"}
        }).then(function(){
          console.log("updated user Info")
          window.location.href="/profile"
        });
      };
        
      render() {
        return (
          <div>
            <h2>{this.firstName}'s Profile</h2>
            <hr/>
            <h3>Infomation to Update</h3>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" type="text" />
            
                <label htmlFor="lastName">Last Name</label>
                <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" type="lastName" />
              
                {/* <label htmlFor="income">Monthly Income</label>
                <input value={this.state.income} onChange={this.handleInputChange} name="income" type="text" />
                 */}
                <label htmlFor="email">Email</label>
                <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" />
              
                <label htmlFor="password">Password</label>
                <input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" />
              </div>
              <button 
                disabled={!(this.state.firstName && this.state.lastName && this.state.email &&  this.state.password)} 
                onClick={this.handleFormSubmit}>
                Update Profile
              </button>
            </form>
          </div>
        )
      }
}