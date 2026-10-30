import React from "react";
import { IconButton } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Character3D from './Character3D';
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-1" aria-hidden />
      <div className="hero-orb hero-orb-2" aria-hidden />
      <div className="hero-orb hero-orb-3" aria-hidden />
      <div className="hero-grid-floor" aria-hidden />
      <svg className="hi-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="hiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8750f7" />
            <stop offset="100%" stopColor="#d4aaff" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" textAnchor="middle" className="hi-text">HI</text>
      </svg>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-intro">I am</span>{' '}
          <span className="hero-name">Nanda Kumar Matha</span>
        </h1>
        <h2 className="hero-subtitle">Adaptable Tech Maven.</h2>

        {/* Mobile 3D Character Viewport */}
        <div className="ss-hero-image">
          <Character3D />
        </div>

        <p className="hero-description">
          I break down complex user experience problems to create integrity-focused solutions that
          connect billions of people.
        </p>

        <div className="hero-buttons">
          <IconButton
            className="home-iconButton lki"
            href="https://www.linkedin.com/in/nandakumar-matha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          > 
            <LinkedIn /> 
          </IconButton> 
          <IconButton
            className="home-iconButton wa"
            href="https://wa.me/919493785134"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          > 
            <WhatsApp /> 
          </IconButton> 
          <IconButton
            className="home-iconButton gt"
            href="https://github.com/NandaKumarMatha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          > 
            <GitHub /> 
          </IconButton>
        </div>
      </div>

      {/* Desktop 3D Character Viewport */}
      <div className="hero-image">
        <Character3D />
      </div>
    </section>
  );
};

export default Hero;
