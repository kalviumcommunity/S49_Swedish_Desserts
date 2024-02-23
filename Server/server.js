// server.js
const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const CakesModel = require("../Server/models/Cakes");
const CookiesModel = require("../Server/models/Cookies");
const app = express();
app.use(cors());
const port = process.env.PUBLIC_PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection URL
const uri = process.env.MONGODB_URI;

async function Connection() {
  await mongoose.connect(uri);
  console.log("connected to DB");
}

async function getAllCakes() {
  var x = await CakesModel.find();
  return x;
}

app.get("/getcakes", async (req, res) => {
  let value = await getAllCakes();
  res.send(value).status(200);
});

async function getAllCookies() {
  var x = await CookiesModel.find();
  return x;
}

app.get("/getcookies", async (req, res) => {
  let value = await getAllCookies();
  res.send(value).status(200);
});

const Review = mongoose.model('Review', {
  dessertName: String,
  ingredients: String,
  ratings: Number,
  description: String
});


app.post('/reviews', async (req, res) => {
  try {
    const { dessertName, ingredients, ratings, description } = req.body;
    const newReview = new Review({
      dessertName,
      ingredients,
      ratings,
      description
    });
    await newReview.save();
    res.status(201).send('Review submitted successfully');
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).send('Internal Server Error');
  }
});




Connection().then(() => {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
});




// Import routes after defining the MongoDB client
const routes = require("./routes");

// Routes
app.use("/", routes); // Mount the routes at the root URL

app.get("/ping", (req, res) => {
  res.send("pong");
});



module.exports = app;
