import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import API from '../../utils/API';



class Profile extends Component {
    constructor(props) {
    super(props);
    this.state = {metadata: {}}
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log(profile)
        const sub = profile.sub;

        API.getMeta(sub)
          .then(res => {                   
            this.setState({metadata: res.data.user_metadata || {}})

          })
          .catch(err => console.log(err))
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
     
  render() {
    const { profile } = this.state;
    const { isAuthenticated } = this.props.auth;

    return isAuthenticated() ? (
      <div className="container">
        <div className="profile-area">
          <h1>Profile Information</h1>
          <div className="infoBody">
            <img src={profile.picture} alt="profile" />
            <div>
              <h4>Name: {this.state.metadata.firstName} {this.state.metadata.lastName} </h4>
              <h6>Monthly Income: ${this.state.metadata.monthlyIncome} </h6>
            </div>
          </div>
          <button className="btn-warning"><Link to="/profileform">Update Profile</Link></button>
        </div>
      </div>
    ):null 
  }
}

export default Profile;