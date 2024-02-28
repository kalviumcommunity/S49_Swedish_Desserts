import React from 'react';
import "./Footer.css"
import logo from "../images/logo.png";
import footer from "../images/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Explore Desserts from Around the World</h2>
        <p>Indulge in the sweet delights of various cultures and traditions.</p>
        <div className="social-links">
          <img src={footer} alt="social-links" />
        </div>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Website Logo" />
      </div>
    </footer>
  );
}

export default Footer;
