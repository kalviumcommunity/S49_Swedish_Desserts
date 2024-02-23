import React, { useEffect, useState } from "react";
import axios from "axios";

const CakeDetails = ({ cake }) => {
  return (
    <div className="card">
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Price: {cake.price}</p>
      <p>Calories: {cake.calories}</p>
      <p>Type: {cake.type}</p>
      <p>Occasions: {cake.occasions.join(", ")}</p>
    </div>
  );
};

const CakeCard = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getcakes");
        setCakes(response.data);
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    };
    fetchCakes();
  }, []);

  return (
    <div>
      <div className="cards-container">
        <div className="cakes-container">
          <h2>Cakes</h2>
          <div className="cards">
            {cakes.map((cake) => (
              <CakeDetails key={cake._id} cake={cake} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
