import React, { useEffect, useState } from "react";
import axios from "axios";

const IndividualCookie = ({ cookie }) => {
  return (
    <div className="card">
      <h2>{cookie.name}</h2>
      <img src={cookie.image_url} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>Ingredients: {cookie.ingredients.join(", ")}</p>
      <p>Origin: {cookie.origin}</p>
    </div>
  );
};

const CookieCard = () => {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getcookies");
        setCookies(response.data);
      } catch (error) {
        console.error("Error fetching cookies:", error);
      }
    };
    fetchCookies();
  }, []);

  return (
    <div>
      <div className="cookies-container">
        <h2>Cookies</h2>
        <div className="cards">
          {cookies.map((cookie) => (
            <IndividualCookie key={cookie._id} cookie={cookie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookieCard;
