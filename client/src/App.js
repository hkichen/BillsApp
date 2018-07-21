import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Navbar from './components/Navbar';
//  import Footer from './components/Footer';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Statement from './components/Statement';
import ProfileForm from './pages/ProfileForm';
import Auth from './Auth/Auth';
import history from './history';
import Callback from './components/Callback/Callback';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const AppRouter = () => {
  
  return (
    <Router history={history} component={Landing}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addexpense" component={AddExpense} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profileform" component={ProfileForm} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/statements" component={Statement} />
      </Switch>
    </div>
    </Router>
  );
}

