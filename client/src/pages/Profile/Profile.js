import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import API from '../../utils/API';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { metadata: {} };
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { getProfile } = this.props.auth;
    getProfile((err, profile) => {
      this.setState({ profile });
      const sub = profile.sub;
      API.getMeta(sub)
        .then(res => {
          this.setState({ metadata: res.data.user_metadata || {} });
        })
        .catch(err => console.log(err));
    });
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
                <div className="card-body" id="profile-info">
                  <img src={profile.picture} alt="profile" id="profile-img" />
                  <br />
                  <br />
                  <h3>
                    {this.state.metadata.firstName}
                    &nbsp;
                    {this.state.metadata.lastName}
                  </h3>
                  <h5>Monthly Income: ${this.state.metadata.monthlyIncome} </h5>
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
