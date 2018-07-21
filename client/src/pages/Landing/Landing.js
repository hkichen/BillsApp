import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import image from '../../Images/folder-icon.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              <div className="card text-center" id="sign-up">
                <h3>
                  <Link to="/signup" className="link-text">
                    Sign Up/Log In
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card" id="log-in">
                <div className="card-body text-center" id="info-text">
                  <h3>
                    Welcome to <br />
                    <img src={image} width="24" height="24" alt="" />
                    <span id="logo">BILL BUSTER</span>
                  </h3>
                  <p>
                    Bill Buster is a mobile friendly app that allows users to
                    log in to their virtual filing system. Users can input their
                    billing information for any type that they may have, add and
                    store picture copies of their statements, and get a quick
                    look at the spread of their finances from the pie chart
                    generated by their input data. Users must log in to be able
                    to view their information. All routes beyond the landing
                    page are protected. Bill Buster is designed to make managing
                    your finances simpler and more comprehensive, without all
                    the clutter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
