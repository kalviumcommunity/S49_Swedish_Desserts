import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";
import cakelogo from "../images/cakelogo.png";
import cookielogo from "../images/cookielogo.png";
import star from "../images/star.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> {/* Link to the home component */}
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">



        <div className="navbar-item">
          <Link to="/cakes"> {/* Link to /cakes */}
            <img src={cakelogo} alt="Cake" className="logo" />
          </Link>
          <span className="link-text">Cakes</span>
        </div>
        <div className="navbar-item">
          <Link to="/cookies"> {/* Link to /cookies */}
            <img src={cookielogo} alt="Cookie" className="logo" />
          </Link>
          <span className="link-text">Cookies</span>
        </div>

        <div className="navbar-item">
          <Link to="/write-review"> {/* Link to /cookies */}
            <img src={star} alt="star" className="logo" />
          </Link>
          <span className="link-text">Write a Review</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
