import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Landing extends Component {
  state = {
    email:  "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      //do so sort of get from DB and verification
    }
  }

  render() {
    return (
      <div>
        <h2>Landing Page</h2>
        <div className="container">
          <div className="row">
            <div className="main">
              <h3>Please Log In, or <Link to="/signup"> Sign Up </Link></h3>
              <form>
                <div className="form-group">
                  <label>email</label>
                    <input 
                      value={this.state.email}
                      onChange={this.handleInputChange} 
                      className="form-control" 
                      name="email" 
                      placeholder=" (required)" 
                    />

                </div>
                <div className="form-group">
                  <label>Password</label>
                    <input 
                      type="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      className="form-control"
                      name="password"
                      placeholder=" required" 
                    />
                </div>
                <button 
                  type="submit"
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}  
                >
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