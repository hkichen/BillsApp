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
    return isAuthenticated() ? (
      <div className="bg-img">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <h2 className="text-center">Profile Information</h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card text-center">
                <div className="card-body">
                  <img src={profile.picture} alt="profile" id="profile-img" />
                  <br />
                  <br />
                  <h4>{profile.name}</h4>
                  <br />
                  <button className=" btn btn-warning btn-lg">
                    <Link to="/profileform" className="link-text">
                      Update
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Profile;
