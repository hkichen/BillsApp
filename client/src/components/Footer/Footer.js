import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import image from '../../images/folder-icon.png';
import('./Footer.css');

class Footer extends Component {
  render() {
    return (
      <div className="card fixed-bottom text-center" id="footer">
        <footer className="card-body" id="footer-body">
          &copy; copyright 2018 <span id="footer-logo">BILL BUSTER</span>
        </footer>
      </div>
    );
  }
}
export default Footer;
