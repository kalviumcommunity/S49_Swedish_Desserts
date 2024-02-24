//Review.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Review.css';

const Review = ({ setSubmittedData }) => {
  const [formData, setFormData] = useState({
    dessertName: '',
   
    ratings: '',
    description: ''
  });
 
  const [successMessage, setSuccessMessage] = useState('');
  const { dessertName, ratings, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any form field is empty
    if (!dessertName ||  !ratings || !description) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await axios.post('http://localhost:3000/reviews', formData); // Adjust the endpoint accordingly
      setSuccessMessage('Submitted successfully');
      setSubmittedData(prevData => [...prevData, formData]); // Update submitted data in App.jsx
      setFormData({
        dessertName: '',
        ratings: '',
        description: ''
      });
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
