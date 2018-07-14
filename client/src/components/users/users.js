import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Users extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [{
          id: "",
          firstName: "",
          lastName: ""
        }]
      };
    }
  
    componentDidMount() {
      fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users: users}));
    }
  
    render() {
      console.log(this.state.users);
      return (
        <ul>
          {
            this.state.users.map((user) => (
              <li key={user.id}><Link to={this.props.match.url + "/" + user.id}>{user.firstName} {user.lastName}</Link></li>
            ))
          }
        </ul>
      );
    }
  }


export default Users;
