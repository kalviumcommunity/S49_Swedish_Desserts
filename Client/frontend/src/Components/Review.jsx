//Review.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Review.css';
import Cookies from 'js-cookie';




const Review = ({ setSubmittedData}) => {
  const [formData, setFormData] = useState({
    dessertName: '',
    ratings: '',
    description: '',
    username:localStorage.getItem("username")
  });
 
  const [successMessage, setSuccessMessage] = useState('');
  const { dessertName, ratings, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let x=(Cookies.get('username'));
    console.log("x",typeof(x),x)
  
    // Check if any form field is empty
    if (!dessertName || !ratings || !description) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      // Check if dessert name exists in cakes API
      const cakesResponse = await fetch('https://s49-swedish-desserts.onrender.com/getcakes');
      const cakesData = await cakesResponse.json();
      const cakeNames = cakesData.map(cake => cake.name);
  
      // Check if dessert name exists in cookies API
      const cookiesResponse = await fetch('https://s49-swedish-desserts.onrender.com/getcookies');
      const cookiesData = await cookiesResponse.json();
      const cookieNames = cookiesData.map(cookie => cookie.name);
  
      // Check if dessertName exists in cakeNames or cookieNames
      if (cakeNames.includes(dessertName) || cookieNames.includes(dessertName)) {
        // Dessert found, proceed with form submission
        setFormData({
          dessertName: dessertName,
          ratings: ratings,
          description: description,
          username:localStorage.getItem("username")
        })
        console.log("inside",x)
        console.log("from something",formData)
        await axios.post('https://s49-swedish-desserts.onrender.com/reviews', formData);
        setSuccessMessage('Submitted successfully');
        setSubmittedData(prevData => [...prevData, formData]); // Update submitted data in App.jsx
       
      } else {
        // Dessert not found, display error message
        alert("Dessert not found");
        console.log('Dessert not found');
        // Implement code to display error message to user
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error
    }
  };
  

  return (
    <div className="container">
      <div className="form-container">
       
        <h2>Write a Review</h2>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="dessertName">Dessert Name:</label>
            <input type="text" id="dessertName" name="dessertName" value={dessertName} onChange={handleChange} />
          </div>
          
          <div>
            <label htmlFor="ratings">Ratings:</label>
            <input type="number" id="ratings" name="ratings" value={ratings} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="description">Write a Review:</label>
            <textarea id="description" name="description" value={description} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
          </div>
  );
};

export default Review;
