import React from 'react';
import "./Footer.css";

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>WeatherApp</h2>
          <p>Your reliable weather companion.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <ul>
            <li><a href="#weather-updates">Weather Updates</a></li>
            <li><a href="#news">About</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WeatherApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;