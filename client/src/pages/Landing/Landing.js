import React, { Component } from 'react';
import './Landing.css';
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
            <div className="col-sm-8 offset-sm-2">
              <div className="card" id="log-in">
                <div className="card-body text-center" id="info-text">
                  <h3>
                    Welcome to <br />
                    <img
                      className="miniLogo"
                      src={image}
                      width="30"
                      height="30"
                      alt=""
                    />
                    <span id="logo">BILL BUSTER</span>
                  </h3>
                  <p>
                    A mobile friendly app designed to make managing your
                    finances simpler and more comprehensive, without all the
                    clutter. Some of the options at your fingertips include:
                  </p>
                  <p>viewing your total expenses on the dashboard pie chart</p>
                  <p>
                    storing any type of billing information in easy to use
                    folders
                  </p>
                  <p>adding and storing images of your statements</p>
                  <p>
                    And Bill Buster keeps your records safe with secured routes
                    and user password protection.
                  </p>
                  <h5>Use the Sign Up/Log In tab &</h5>
                  <h4> Start using Bill Buster today!</h4>
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
