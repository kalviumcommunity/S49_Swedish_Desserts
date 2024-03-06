//Home.jsx
import React, { useEffect, useRef, useState } from "react";
import video from "../images/video.mp4";
import SubmittedData from "../Components/SubmittedData";
import "./Home.css";
import readreview from "../images/readreview.png";
import close from "../images/close.png";

import axios from "axios";
import MultiActionAreaCard from "../Components/ui"

const Home = ({ submittedData }) => {
  const videoRef = useRef(null);
  const [showChatbox, setShowChatbox] = useState(false);

  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/review");
        
        const length = response.data.length;
        console.log("Length of the dataset:", length); // Log the length of the dataset
        setDataLength(length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  


  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    // Start playing the video when the component mounts
    playVideo();

    // Listen for the 'ended' event and play the video again
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", playVideo);
    }

    // Cleanup the event listener
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", playVideo);
      }
    };
  }, []);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };





  return (
    <div className="home-container">
      <video
        ref={videoRef}
        width="640"
        autoPlay
        style={{
          borderRadius: "20px", // Curved borders
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(128, 0, 128, 0.5)", // Shadow effect with darker pink and purple gradient
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="read-review-container">
        <img
          src={readreview}
          alt="Read Review"
          className="read-review-image"
          onClick={toggleChatbox}
        />
      </div>

      {showChatbox && (
        <div className="chatbox">
          <div className="close-button-container">
            <h3 style={{marginRight:"70px"}}>Reviews</h3>
    
            <button className="close-button" onClick={toggleChatbox}>
              <img src={close} alt="close" className="close-icon" />
            </button>
          </div>

          <div className="submitted-data-container">
            <SubmittedData submittedData={submittedData} />
          </div>
        </div>
      )}
<div className="images-container">

    <MultiActionAreaCard/>

</div>
 
    </div>
  );
};

export default Home;
