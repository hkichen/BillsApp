import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Statement from './components/Statement';
import ProfileForm from './pages/ProfileForm';

const App = () => (
  <Router>
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

export default App;
