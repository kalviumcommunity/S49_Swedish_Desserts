// server.js
const Joi = require("joi");
const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const CakesModel = require("../Server/models/Cakes");
const CookiesModel = require("../Server/models/Cookies");
const UserModel = require('../Server/models/User');
const { Review, validateReview } = require('./models/Review');
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



async function submitReview(req, res) {
  try {
    console.log(req.body);
    const { error } = validateReview(req.body);
    if (error) {
      console.log(error)
      return res.status(400).send(error.details[0].message);
    }

    const { dessertName, ratings, description } = req.body;
    const newReview = new Review({
      dessertName,
      ratings,
      description
    });
    await newReview.save();

    res.status(201).send('Review submitted successfully');
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Mount the submitReview handler
app.post('/reviews', submitReview);



async function getAllReview() {
  var x = await Review.find();
  return x;
}

app.get("/review", async (req, res) => {
  let value = await getAllReview();
  res.send(value).status(200);
});



// Update a review
app.put('/review/:id', async (req, res) => {
  const { id } = req.params;
  const { dessertName, ratings, description } = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, { dessertName, ratings, description }, { new: true });
    res.json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a review
app.delete('/review/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndDelete(id);
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//login


async function getAllUsers() {
  var x = await UserModel.find();
  return x;
}

app.get("/users", async (req, res) => {
  let value = await getAllUsers();
  res.send(value).status(200);
});

app.post('/signup', async (req, res) => {
  try {
    const {username,password} = req.body;
    
    const newUser = new UserModel({ username, password });
    await newUser.save();
    res.status(201).json(newUser); 
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
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
