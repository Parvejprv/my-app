import React from 'react';
import './Navbar.css';

function Navbar () {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#weather-updates">Weather Updates</a></li>
        <li className="nav-item"><a href="#contact">Contact Us</a></li>
        <li className="nav-item"><a href="#support">Support</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;