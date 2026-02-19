// src/components/Navbar.js
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../assets/digitdeer.png'; 
import '../App.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* 1. Hamburger Icon on the LEFT */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 2. Logo in the center/right */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Digit Deer Solutions" className="navbar-logo" />
        </Link>
      </div>

      {/* 3. Navigation Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" className="nav-item" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-item" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link></li>
        {/* Contact gets the special CTA Button styling */}
        <li><Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;