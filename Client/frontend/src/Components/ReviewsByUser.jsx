import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReviewsByUser = () => {
  const [reviews, setReviews] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://s49-swedish-desserts.onrender.com/review?username=${username}`);
        const filteredReviews = response.data.filter(review => review.username === username);
        setReviews(filteredReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [username]);

  return (
    <div>
      <h1 className="Reviews">Reviews by {username}</h1>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h2>{review.dessertName}</h2>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsByUser;
