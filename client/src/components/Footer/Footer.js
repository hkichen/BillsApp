import React, { Component } from 'react';
import('./Footer.css');

class Footer extends Component {
  render() {
    return (
      <div className="card fixed-bottom text-center" id="footer">
        <footer className="card-body" id="footer-body">
          Contact Us | Privacy & Security | Help <br />
          &copy; 2018 <span id="footer-logo">BILL BUSTER</span>
        </footer>
      </div>
    );
  }
}
export default Footer;
