import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const IndividualCookie = ({ cookie }) => {

  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/write-review`);
  };
  
  return (
    <div className="card">
    <Card sx={{ minWidth: 300, minHeight: 350, position: 'relative', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cookie.image_url}
          alt={cookie.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cookie.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cookie.description}
          </Typography>
      
          <Typography variant="body2" color="text.secondary">
            Origin: {cookie.origin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
        <Button size="larger" color="primary">
          ❤️
        </Button>
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
        <Button size="large" color="primary"  onClick={handleReviewClick}>
          Review
        </Button>
      </div>
    </Card>
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
    <div className="cookies-container">
      <h1 className="Cookies">
        Cookies
      </h1>
      <div className="cards">
        {cookies.map((cookie) => (
          <IndividualCookie key={cookie._id} cookie={cookie} />
        ))}
      </div>
    </div>
  );
};

export default CookieCard;
