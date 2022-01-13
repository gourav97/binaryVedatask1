import React from 'react';
import logo from '../../assets/logo-white.svg'
import './Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
 

  

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Overview</h4>
        <p>Why Marvel</p>
        <p>Enterprise</p>
        <p>Pricing</p>
        <p>Request a demo</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Features</h4>
        <p>WireFraming </p>
        <p>Design</p>
        <p>Prototyping</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Support</h4>
        <p>Help Center</p>
        <p>Privacy</p>
        <p>Security</p>
      </div>
    </div>

  
  </div>
);

export default Footer;