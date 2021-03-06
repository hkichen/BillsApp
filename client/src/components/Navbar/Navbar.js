import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './folder-icon.png';
import Landing from '../../pages/Landing';
import('./Navbar.css');

class Navbar extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <Link to="/landing" className="navbar-brand">
            <img className="logo" src={image} width="34" height="34" alt="" />BILL
            BUSTER
          </Link>

          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {isAuthenticated() ? (
              <li className="nav-item active">
                <Link to="/profile" className="nav-link">
                  Profile<span className="sr-only">(current)</span>
                </Link>
              </li>
              ):(
                <li className="nav-item active">
                <div className="nav-link">
                  Profile<span className="sr-only">(current)</span>
                </div>
              </li> 
              )} 

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addExpense" className="nav-link">
                  Update Expenses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/statementInfo" className="nav-link">
                  View Statements
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/statement" className="nav-link">
                  Add Statements
                </Link>
              </li>
              {!isAuthenticated() ? (
                <li
                  className="nav-item log-in-out"
                  onClick={this.login.bind(this)}
                >
                  <div className="nav-link">Log In/Sign Up</div>
                </li>
              ) : (
                <li
                  className="nav-item log-in-out"
                  onClick={this.logout.bind(this)}
                >
                  <div className="nav-link">Log Out</div>
                </li>
              )}
            </ul>
          </div>
        </nav>
        {!isAuthenticated() ? <Landing /> : null}
      </div>
    );
  }
}
export default Navbar;
