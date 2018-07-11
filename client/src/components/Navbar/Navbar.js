import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Users from '../users/users';
import User from '../users/user';
import Dashboard from '../../pages/Dashboard';
<<<<<<< HEAD
import AddExpense from '../../pages/AddExpense';
import Statement from '../../components/Statement';
import StatementInfo from '../../components/StatementInfo';
=======
import Signup from '../../pages/Signup';

>>>>>>> 57c7786460969f6a8dc54e3c99f968a6af10bba9

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <ul>
<<<<<<< HEAD
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
=======
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
>>>>>>> 57c7786460969f6a8dc54e3c99f968a6af10bba9
        </div>
      </Router>
    );
  }
}
export default Navbar;
