// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Company Info */}
        <div className="footer-col">
          <h3>Digit Deer Solutions</h3>
          <p className="footer-desc">
            Empowering businesses with cutting-edge IT solutions. From mobile apps to enterprise software, we build the future of digital interaction.
          </p>
          <div className="social-links">
            {/* External links should use <a> but need valid hrefs */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Mobile App Development</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Desktop Software</Link></li>
            <li><Link to="/services">Web Portals</Link></li>
            <li><Link to="/services">IT Product Management</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Rudrapur (Udham Singh Nagar) Uttarakhand, India, 263153</span>
            </li>
            {/*<li>
              <FaPhoneAlt className="contact-icon" />
              <span>+91 8650788779</span>
            </li>*/}
            <li>
              <FaEnvelope className="contact-icon" />
              <span>support@digitdeersolutions.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Digit Deer Solutions. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          {/* Internal links should use Link, not <a> */}
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;