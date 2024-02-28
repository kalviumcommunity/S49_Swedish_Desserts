import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import CakeCard from './Components/CakeCard';
import CookieCard from './Components/CookieCard';
import Review from './Components/Review.jsx';
import SignUpLogin from './Components/Signup.jsx'; // Import your SignUpLogin component
import './App.css';
import './Components/Review.css';
import Footer from './Components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log("sucessfylly in")
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>
      {/* Content */}
      <div className="content">
        {/* Render SignUpLogin if not logged in */}
        {!isLoggedIn && <SignUpLogin onLoginSuccess={handleLoginSuccess} />}
        {/* Render Routes if logged in */}
        {isLoggedIn && (
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeCard />} />
          <Route path="/cookies" element={<CookieCard />} />
          <Route path="/write-review" element={<Review/>} />
        </Routes>

        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
