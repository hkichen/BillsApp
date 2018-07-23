import React, { Component } from 'react';
import './ProfileForm.css';
import API from '../../utils/API';

class ProfileForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    monthlyIncome: 0,
    email: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentWillMount() {
    const { getProfile } = this.props.auth;

    getProfile((err, profile) => {
      const subArray = profile.sub.split('|');
      const sub = subArray[0] + '%7C' + subArray[1];
      API.getMeta(sub)
        .then(res => {
          const data = res.data.user_metadata || {};
          this.setState({
            firstName:
              data.firstName || profile.given_name || this.state.firstName,
            lastName:
              data.lastName || profile.family_name || this.state.lastName,
            monthlyIncome: data.monthlyIncome || this.state.monthlyIncome,
            sub: sub
          });
        })
        .catch(err => console.log(err));
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.updateMeta(this.state).then(function() {
      window.location.href = '/profile';
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated() ? (
      <div className="bg-img">
        <div className="container">
          <br />
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <h2 className="text-center">Update User Profile</h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card">
                <div className="card-body" id="user-profile-input">
                  <form className="updateProfile">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      name="firstName"
                    />

                    <label>Last Name</label>
                    <input
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      name="lastName"
                    />

                    <label>Monthly Income</label>
                    <input
                      className="form-control"
                      value={this.state.monthlyIncome}
                      onChange={this.handleInputChange}
                      type="number"
                      name="monthlyIncome"
                      placeholder="00.00"
                    />
                  </form>
                  <button
                    className=" btn btn-warning btn-lg"
                    onClick={this.handleFormSubmit}
                  >
                    Update
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

export default ProfileForm;
