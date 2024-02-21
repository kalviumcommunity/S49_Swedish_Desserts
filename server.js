// server.js
const express = require('express');
const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoose=require('mongoose')
const cors=require('cors')
const CakesModel=require('./models/Cakes')
const CookiesModel=require('./models/Cookies')
const app = express();
app.use(cors());
const port = process.env.PUBLIC_PORT || 3000;

async function GetAll(){
     let x=await CakesModel.find();
     console.log(x);
}


// Middleware
app.use(express.json());

// MongoDB connection URL
const uri = process.env.MONGODB_URI;

async function Connection(){
    await mongoose.connect(uri)
    console.log("connected to DB")
}

async function getAllCakes(){
        var x=await CakesModel.find();
        return x;
   
}



app.get('/getcakes',async (req,res)=>{
     
       let value=await  getAllCakes();
       res.send(value).status(200)

})



async function getAllCookies(){
  var x=await CookiesModel.find();
  return x;

}



app.get('/getcookies',async (req,res)=>{

 let value=await  getAllCookies();
 res.send(value).status(200)

})


// Import routes after defining the MongoDB client
const routes = require("./routes");

// Routes
app.use("/", routes); // Mount the routes at the root URL

app.get("/ping", (req, res) => {
  res.send("pong");
});

// app.get("/", async (req, res) => {
//   try {
//     // Connect to the MongoDB database
//     await client.connect();

//     // Check if the connection is successful
//     if (client.topology.isConnected()) {
//       res.json({ message: "pong", database_status: "Connected" });
//       console.log("yes");
//     } else {
//       res.json({ message: "pong", database_status: "Disconnected" });
//       console.log("no");
//     }
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// if (require.main === module) {
//   // Move the app.listen call inside the if block
//   app.listen(port, () => {
//     GetAll();
//     console.log(`Server running on PORT: ${port}`);
//   });
// }

Connection().then(()=>{
  
  app.listen(port, () => {
        console.log(`Server running on PORT: ${port}`);
      });
})

module.exports = app;
