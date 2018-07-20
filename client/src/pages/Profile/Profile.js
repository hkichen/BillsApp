import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
     
  render() {
    
    const { profile } = this.state;
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() ?
      <div className="container">
        <div className="profile-area">
          <h1>Profile Information</h1>
          <div header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <h4>Name: {profile.name} </h4>
            </div>
          </div>
        </div>
        <button className="btn-warning"><Link to="/profileform">Update Profile</Link></button>
      </div>
      : null
    );
  }
}

export default Profile;
