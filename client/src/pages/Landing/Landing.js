import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h2>Landing Page</h2>
        <div className="container">
          <div className="row">
            <div className="main">
              <h3>Please Log In, or <a href="">Sign Up</a></h3>
              <form>
                <div className="form-group">
                  <label>Username or email</label>
                    <input type="text" className="form-control" name="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <button type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;