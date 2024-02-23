//SubmittedData.jsx
import React from 'react';

const SubmittedData = ({ submittedData }) => {
  return (
    <div>
      {submittedData.map((review, index) => (
        <div key={index} className="submitted-data">
          <div className="review-card">
            <h3>Submitted Review {index + 1}</h3>
            <p>Dessert Name: {review.dessertName}</p>
            <p>Ingredients: {review.ingredients}</p>
            <p>Ratings: {review.ratings}</p>
            <p>Description: {review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmittedData;
