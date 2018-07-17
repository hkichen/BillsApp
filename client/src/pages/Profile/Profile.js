import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  
  //dummy data
  state = {
    firstName: "Lina",
    lastName: "Kichen",
    email: "me@me.com",
    password:"password"
  }
  
  // componentDidMount() {
  //   fetch('/api/users/1')
  //   .then(res => res.json())
  //   .then(users => this.setState({users: users}));
  // }
  
  render() {
    console.log(this.state);
    return (
      <div className="userInfo">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h5 className="panel-title">{this.state.firstName} {this.state.lastName}</h5>
            </div>
            
            <div className="panel-body">
              <table className="table table-user-information">
              <tbody>
                <tr>
                  <td>Monthly Income: empty for now</td>
                </tr>
                <tr>
                  <td>Email: {this.state.email}</td>
                </tr>                                                
              </tbody>
            </table>
            <button className="btn btn-warning"><Link to="/profileform">Update Profile Information</Link></button>
          </div>
          </div>
      </div>
    );
  }
};

export default Profile;