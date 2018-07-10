import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {id: "", fistName: ""};
  }

  componentDidMount() {
    fetch('/api/users/' + this.props.match.params.id)
      .then(res => res.json())
      .then(user => this.setState(user))
  }

  render() {
    return (
      <div>Name: {this.state.firstName}</div>
    );
  }
}

export default User;