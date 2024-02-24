import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import CakeCard from "./Components/CakeCard";
import CookieCard from "./Components/CookieCard";
import Review from "./Components/Review.jsx";
import "./App.css";
import './Components/Review.css';

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>      
      {/* Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home submittedData={submittedData} />} />
          <Route path="/cakes" element={<CakeCard />} />
          <Route path="/cookies" element={<CookieCard />} />
          <Route path="/write-review" element={<Review setSubmittedData={setSubmittedData}  />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
