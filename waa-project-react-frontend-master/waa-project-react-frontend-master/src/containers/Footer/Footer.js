import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">RentToday</h2>
          <p className="footer-description">Find your perfect rental with ease.</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link">Facebook</a>
            <a href="#" className="footer-social-link">Twitter</a>
            <a href="#" className="footer-social-link">Instagram</a>
            <a href="#" className="footer-social-link">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/listings" className="footer-link">Listings</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Resources</h3>
          <ul className="footer-list">
            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/blog" className="footer-link">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <ul className="footer-list">
            <li><a href="mailto:info@renttoday.com" className="footer-link">info@renttoday.com</a></li>
            <li>123 Rental Street</li>
            <li>Apartment City, AC 12345</li>
            <li>Benagluru India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">RentToday © {new Date().getFullYear()} All rights reserved.</div>
        <div className="footer-developers">
          Developed with ❤️ by 
          <a href="https://github.com/ruhan-ataraut" target="_blank" rel="noopener noreferrer" className="footer-developer-link"> Ruhan Ataraut</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;