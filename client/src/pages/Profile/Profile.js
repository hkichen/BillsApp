import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  //dummy data
  state = {
    firstName: 'Lina',
    lastName: 'Kichen',
    email: 'me@me.com',
    password: 'password'
  };

  // componentDidMount() {
  //   fetch('/api/users/1')
  //   .then(res => res.json())
  //   .then(users => this.setState({users: users}));
  // }

  render() {
    console.log(this.state);
    return (
      <div className="bg-img">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              <div className="card text-center" id="user-profile">
                <div className="card-title">
                  <h3 id="user-name">
                    {this.state.firstName} {this.state.lastName}
                  </h3>
                </div>
                <div className="card-body">
                  <h4>Monthly Income: $</h4>
                  <h4>Email: {this.state.email}</h4>
                  <button className="btn btn-warning btn-lg">
                    <Link to="/profileform" id="btn-text">
                      Update
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
