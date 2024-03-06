import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";
import cakelogo from "../images/cakelogo.png";
import cookielogo from "../images/cookielogo.png";
import star from "../images/star.png";
import logout from "../images/logout.png";
import profile from "../images/profile.png";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [usernames, setUsernames] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate(); // Import useNavigate

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsernames(response.data.map(user => user.username));

        // Set initial value of selectedUser from cookie
        const usernameFromCookie = Cookies.get('username');
        if (usernameFromCookie && usernames.includes(usernameFromCookie)) {
          setSelectedUser(usernameFromCookie);
        }
      } catch (error) {
        console.error('Error fetching usernames:', error);
      }
    };

    fetchUsernames();
  }, []);

  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('token');
    window.location.reload();
  };

  const handleUserChange = (event) => {
    const selectedUsername = event.target.value;
    setSelectedUser(selectedUsername);
    navigate(`/reviews/${selectedUsername}`); // Navigate to ReviewsByUser component
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-item">
          <Link to="/cakes">
            <img src={cakelogo} alt="Cake" className="logo" />
            <span className="link-text">Cakes</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/cookies">
            <img src={cookielogo} alt="Cookie" className="logo" />
            <span className="link-text">Cookies</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/write-review">
            <img src={star} alt="star" className="logo" />
            <span className="link-text">Write a Review</span>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/" onClick={handleLogout}>
            <img src={logout} alt="logout" className="logo" />
            <span className="link-text">Log out</span>
          </Link>
        </div>
        <div className="navbar-item dropdown">
          <img src={profile} alt="profile" className="logo" />
          <span className="link-text">{selectedUser}</span>
          <div className="dropdown-content">
            <select name="dropdown-content" id="dropdown-content" value={selectedUser} onChange={handleUserChange}>
              <option value="">Select Username</option>
              {usernames.map((username, index) => (
                <option key={index} value={username}>{username}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
