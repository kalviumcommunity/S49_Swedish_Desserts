import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CakeDetails = ({ cake }) => {


  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/write-review`);
  };

  return (
    <div className="card">
      {/* <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <img src={cake.image_url} alt={cake.name} />
      <p>Calories: {cake.calories}</p>
      <p>Type: {cake.type}</p>
      <p>Occasions: {cake.occasions.join(", ")}</p> */}





    <Card sx={{ minWidth: 300, minHeight: 350, position: 'relative', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cake.image_url}
          alt={cake.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cake.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cake.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cake.calories} Calories
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Origin: {cake.type}
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
          <h1 className="Cakes">Cakes</h1>
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
