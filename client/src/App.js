import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Navbar from './components/Navbar';
import Statement from './components/Statement';
import StatementInfo from './components/StatementInfo';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import ProfileForm from './pages/ProfileForm';
import Auth from './Auth/Auth';
import history from './history';
import Callback from './components/Callback/Callback';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const AppRouter = () => {
  return (
    <Router history={history} component={Landing}>
      <div>
        <Route path="/" render={props => <Navbar auth={auth} {...props} />} />
        <Route
          path="/landing"
          render={props => <Landing auth={auth} {...props} />}
        />
        <Route
          path="/dashboard"
          render={props => <Dashboard auth={auth} {...props} />}
        />
        <Route
          path="/addexpense"
          render={props => <AddExpense auth={auth} {...props} />}
        />
        <Route
          path="/statement"
          render={props => <Statement auth={auth} {...props} />}
        />
        <Route
          path="/statementInfo"
          render={props => <StatementInfo auth={auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props => <Profile auth={auth} {...props} />}
        />
        <Route
          path="/profileform"
          render={props => <ProfileForm auth={auth} {...props} />}
        />
        <Route path="/signup" component={Signup} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Footer />
      </div>
    </Router>
  );
};
