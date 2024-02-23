
// routes.js
const express = require('express');
const router = express.Router();
const { MongoClient, ObjectID } = require('mongodb');

// MongoDB connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Create
router.post('/create', async (req, res) => {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Connected to the database');

    //  to insert data  do it here

    res.status(201).json({ "success": "data created" });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

// Read
router.get('/read', async (req, res) => {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Connected to the database');

    //  to read data do it here

    res.status(200).json({ "success": "data read" });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

// Update
router.put('/update', async (req, res) => {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Connected to the database');

    //  to update data do it here

    res.status(200).json({ "success": "data updated" });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

// Delete
router.delete('/delete', async (req, res) => {
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Connected to the database');

    //  to delete data do it here

    res.status(200).json({ "success": "data deleted" });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

module.exports = router;
