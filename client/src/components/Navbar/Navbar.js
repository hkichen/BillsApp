import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Users from '../users/users';
import User from '../users/user';
import Dashboard from '../../pages/Dashboard';
import Signup from '../../pages/Signup';

=======
>>>>>>> 46f0f722f427851efbb45bdbc03c4df0712c7259

class Navbar extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="navbar">
          <ul>
            <li><Link to="/"> Landing </Link></li>
            <li><Link to="/dashboard"> Dashboard </Link></li>
            <li><Link to="/users"> Users </Link></li>
            <li><Link to="/signup"> Sign Up </Link></li>
          </ul>
  
          <hr/>
  
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/users" component={Users}/>
          <Route exact path="/users/:id" component={User}/>
          <Route exact path="/signup" component={Signup} />
=======
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          BILL BUSTER
        </a>
        <button
          className="navbar-toggler"
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
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addExpense">
                Update Expenses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">
                Users
              </a>
            </li>
          </ul>
>>>>>>> 46f0f722f427851efbb45bdbc03c4df0712c7259
        </div>
      </nav>
    );
  }
}
export default Navbar;
