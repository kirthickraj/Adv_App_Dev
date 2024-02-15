
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import university from "./assets/university.jpg"

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
const HomePage = () => {
  useEffect(() => {
    const backgroundSlider = document.querySelector('.background-slider');

    const intervalId = setInterval(() => {
      backgroundSlider.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        backgroundSlider.appendChild(backgroundSlider.firstElementChild);
        backgroundSlider.style.transition = 'none';
        backgroundSlider.style.transform = 'translateX(0)';
        setTimeout(() => {
          backgroundSlider.style.transition = 'transform 1s ease-in-out';
        });
      }, 1000);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <div className="background-slider">
          <img className="background-slide" src={image1} alt="Slide 1" />
          <img className="background-slide" src={image2} alt="Slide 2" />
          <img className="background-slide" src={university} alt="Slide 3" />
          {/* Add more images as needed */}
        </div>
        <div className="overlay-text">
          <h2>SKCET UNIVERSITY</h2>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;