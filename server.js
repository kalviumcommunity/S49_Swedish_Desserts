// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

// MongoDB connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/ping',(req,res)=>{
  res.send('pong')
})

app.get('/', async (req, res) => {
  try {
    // Connect to the MongoDB database
    await client.connect();

    // Check if the connection is successful
    if (client.topology.isConnected()) {
      res.json({ "message": "pong", "database_status": "Connected" });
      console.log("yes")
    } else {
      res.json({ "message": "pong", "database_status": "Disconnected" });
      console.log("no")
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;
