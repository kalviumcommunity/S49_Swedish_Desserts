import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie library
import './Signup.css'; // Import CSS file for SignUpLogin

const SignUpLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log("success");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Please fill in all fields.');
      return;
    }
    try {
      if (isLogin) {
        // Login
        
        const response = await axios.post('https://s49-swedish-desserts.onrender.com/login', { username, password });
        setMessage(response.data.message);
        Cookies.set('username', response.data.username);
        localStorage.setItem("username", response.data.username);
        console.log(response.data);
        localStorage.setItem('token', response.data.acesstoken);
        // localStorage.setItem('userid', response.data._id);
        Cookies.set('token', response.data.acesstoken);
      } else {
        // Sign Up
        const response = await axios.post('https://s49-swedish-desserts.onrender.com/signup', { username, password });
        setMessage(response.data.message);
        // Set username as a cookie after successful sign-up
        Cookies.set('username', response.data.username);
        localStorage.setItem("username", response.data.username);
        console.log(response.data);
        localStorage.setItem('token', response.data.acesstoken);
        // localStorage.setItem('userid', response.data._id);
        Cookies.set('token', response.data.acesstoken);
      }

     
      // Set isAuthenticated to true after successful login/signup
      setIsAuthenticated(true);

      
    
      // Call the onLoginSuccess callback function
     
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };
  // if (Cookies.get('username') && Cookies.get('token')) {
  //   return null;} 
  // Close the popup if authenticated
  if (isAuthenticated) {
    window.location.reload("/")
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          {message && <p className={message.startsWith('Error') ? 'error' : 'success'}>{message}</p>}
        </form>
        <p onClick={() => { setIsLogin(!isLogin); setIsLoggedIn(true); }}>
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default SignUpLogin;
