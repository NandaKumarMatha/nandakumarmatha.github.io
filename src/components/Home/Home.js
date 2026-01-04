import React from "react";
import { Button, IconButton } from '@mui/material';
import { CloudDownload , LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
        <svg className="hi-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <text x="50%" y="50%" textAnchor="middle" className="hi-text">HI</text>
      </svg>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-intro">I am</span> <span className="hero-name">Nanda Kumar Matha</span>
        </h1>
        <h2 className="hero-subtitle">Adaptable Tech Maven.</h2>
        <div className="ss-hero-image">
          <img src="mnkumar.jpg" alt="Nanda Kumar" />
        </div>
        <p className="hero-description">
          I break down complex user experience problems to create integrity-focused solutions that
          connect billions of people.
        </p>
        <div className="hero-buttons">
        {/* <Button variant="contained" color="primary" startIcon={<CloudDownload />}> 
            Get My CV 
        </Button>  */}
        <IconButton className="home-iconButton lki" href="https://www.linkedin.com/in/nandakumar-matha" target="_blank"> 
            <LinkedIn /> 
        </IconButton> 
        <IconButton className="home-iconButton wa" href="https://wa.me/919493785134" target="_blank"> 
            <WhatsApp /> 
        </IconButton> 
        <IconButton className="home-iconButton gt" href="https://github.com/NandaKumarMatha" target="_blank"> 
            <GitHub /> 
        </IconButton>
        </div>
      </div>
      <div className="hero-image">
        <img src="mnkumar.jpg" alt="Nanda Kumar" />
      </div>
    </section>
  );
};

export default Hero;
