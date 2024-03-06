import React, { useState,useEffect } from 'react';
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
import Cookie from './Components/CookieStorage.jsx';
import ReviewsByUser from './Components/ReviewsByUser.jsx';
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  let [cookieLogin,setCookieLogin]=useState();// To store the token for



   useEffect(()=>{
    async function CallMe(){
      let x=Cookies.get("username");
      setCookieLogin(x)
    }
      CallMe();
   },[cookieLogin])

 
  // Function to handle successful login

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>
      {/* Content */}
      <div className="content">
        {/* Render SignUpLogin if not logged in */}
        {!cookieLogin && <SignUpLogin/>}
        {/* Render Routes if logged in */}
        { cookieLogin && (
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeCard />} />
          <Route path="/cookies" element={<CookieCard />} />
          <Route path="/write-review" element={<Review/>} />
          <Route path="/reviews/:username" element={<ReviewsByUser/>} />
        </Routes>

       

        )}
      </div>
      {/* Footer */}
      <Footer />
     
    </div>
  );
}

export default App;
