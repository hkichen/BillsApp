import React, { Component } from 'react';
import './ProfileForm.css';

//YOU NEED TO GRAB A SPECIFIC USER THAT HAS LOGGED IN


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
        //update values to database
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
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" type="lastName" />
                <br/>
                {/* <label htmlFor="income">Monthly Income</label>
                <input value={this.state.income} onChange={this.handleInputChange} name="income" type="text" />
                 */}
                <label htmlFor="email">Email</label>
                <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" />
                 <br/>
                <label htmlFor="password">Password</label>
                <input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" />
              </div>
              <button className="btn-info"
                disabled={!(this.state.firstName && this.state.lastName && this.state.email &&  this.state.password)} 
                onClick={this.handleFormSubmit}>
                Update Profile
              </button>
            </form>
          </div>
        )
      }
}

export default ProfileForm;