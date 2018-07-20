import React, { Component } from 'react';
import './ProfileForm.css';


class ProfileForm extends Component {
  
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() ?
      <div>
        <h2>{this.firstName}'s Profile</h2>
        <hr/>
        <h3>Infomation to Update</h3>
      </div>
      : null
    )
  }
}

export default ProfileForm;
