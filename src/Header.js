import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>WeatherApp</h1>
      </div>
      <nav className= {`header-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#weather-updates">Weather Updates</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}


export default Header;