import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Review.css";
import dropdown from "../images/dropdown.png";

const SubmittedData = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({
    dessertName: "",
    ratings: "",
    description: "",
  });
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/review");
        // Reverse the order of the array to display the latest review first
        const reversedData = response.data.reverse();
        
        setSubmittedData(reversedData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (id) => {
    const reviewToUpdate = submittedData.find((review) => review._id === id);
    setUpdateFormData(reviewToUpdate);
    setSelectedReviewId(id);
    setIsUpdateFormOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setIsUpdateFormOpen(false);
  };

  const handleChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `http://localhost:3000/review/${selectedReviewId}`,
        updateFormData
      );
      setSubmittedData(
        submittedData.map((review) =>
          review._id === selectedReviewId
            ? { ...review, ...updateFormData }
            : review
        )
      );
      setIsUpdateFormOpen(false);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`http://localhost:3000/review/${id}`);
        setSubmittedData(submittedData.filter((review) => review._id !== id)); // Remove the deleted review from the state
        window.location.reload(); // Refresh the page
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    }
  };

  return (
    <div>
      
      {submittedData.map((review, index) => (
        <div key={index} className="submitted-data">
          <div className="review-card">
            <div className="dropdown-container">
              <div className="dropdown">
                <button className="dropbtn">
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className="dropdown-icon"
                  />
                </button>
                <div className="dropdown-content">
                  <button onClick={() => handleUpdate(review._id)}>
                    Update
                  </button>
                  <button onClick={() => handleDelete(review._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <h2>{review.dessertName}</h2>
            <p>Ratings: {review.ratings} ⭐</p>
            <p>Review: {review.description}</p>
          </div>
        </div>



      ))}
      {isUpdateFormOpen && (
        <div>
          <div className="overlay"></div>
          <div className="update-form">
            <h2>Update Review</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="dessertName">Dessert Name:</label>
                <input
                  type="text"
                  id="dessertName"
                  name="dessertName"
                  value={updateFormData.dessertName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ratings">Ratings:</label>
                <input
                  type="number"
                  id="ratings"
                  name="ratings"
                  value={updateFormData.ratings}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={updateFormData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit">Update Now</button>
              <button onClick={handleCloseUpdateForm}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedData;
