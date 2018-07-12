import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [{ id: '1', name: 'Beau' }] };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
    // this.setState({users: [{id:'5', name: 'John'}]})
  }

  render() {
    console.log(this.state.users);
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>
            <Link to={this.props.match.url + '/' + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Users;
