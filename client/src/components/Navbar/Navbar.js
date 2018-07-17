import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import image from '../../images/folder-icon.png';
import('./Navbar.css');


class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg" id="navbar">
        <Link to="/" className="navbar-brand">
          <img src={image} width="24" height="24" alt="" />BILL BUSTER
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
            <li className="nav-item active">
              <Link to="/profile" className="nav-link">
                Profile<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addExpense" className="nav-link">
                Update Expenses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/statements" className="nav-link">
                Statements
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
