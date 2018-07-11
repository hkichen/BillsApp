import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Users from '../users/users';
import User from '../users/user';
import Dashboard from '../../pages/Dashboard';
import AddExpense from '../../pages/AddExpense';
import Statement from '../../components/Statement';
import StatementInfo from '../../components/StatementInfo';

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/"> Landing </Link>
            </li>
            <li>
              <Link to="/dashboard"> Dashboard </Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
            <li>
              <Link to="/statements">Statements</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addexpense" component={AddExpense} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/statements" component={Statement} />
        </div>
      </Router>
    );
  }
}
export default Navbar;
