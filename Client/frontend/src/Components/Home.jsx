//Home.jsx
import React, { useEffect, useRef } from 'react';
import video from "../images/video.mp4";
import SubmittedData from '../Components/SubmittedData'; 
import './Review.css';

const Home = ({ submittedData }) => {
    const videoRef = useRef(null);
  
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
        videoRef.current.addEventListener('ended', playVideo);
      }
  
      // Cleanup the event listener
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', playVideo);
        }
      };
    }, []);
  
    return (
      <div>
        <video ref={videoRef} width="640" autoPlay style={{
            borderRadius: '20px', // Curved borders
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(128, 0, 128, 0.5)', // Shadow effect with darker pink and purple gradient
            }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        <div className="submitted-data-container">
          <SubmittedData submittedData={submittedData} />
        </div>
      
      </div>
    );
  };
  
  export default Home;
  