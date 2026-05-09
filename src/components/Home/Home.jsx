import React, { useId } from "react";
import { Button, IconButton } from '@mui/material';
import { CloudDownload , LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import "./hero.css";

function HeroPhotoFrame({ children }) {
  const uid = useId().replace(/:/g, '');
  const gradId = `hero-rope-grad-${uid}`;

  return (
    <div className="hero-photo-frame">
      {children}
      <svg
        className="hero-rope-light"
        viewBox="0 0 80 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6a4fc4" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#f5f0ff" stopOpacity="1" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#f0e6ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#6a4fc4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          className="hero-rope-light__track"
          x="1.15"
          y="1.15"
          width="77.7"
          height="97.7"
          rx="11"
          ry="11"
          fill="none"
          stroke="rgba(135, 80, 247, 0.28)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="100"
        />
        <rect
          className="hero-rope-light__stroke"
          x="1.15"
          y="1.15"
          width="77.7"
          height="97.7"
          rx="11"
          ry="11"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="100"
        />
      </svg>
    </div>
  );
}

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
        <div className="ss-hero-image">
          <HeroPhotoFrame>
            <div className="hero-image-inner">
              <img src="mnkumar.jpg" alt="Nanda Kumar" />
            </div>
          </HeroPhotoFrame>
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
        <HeroPhotoFrame>
          <div className="hero-image-inner">
            <img src="mnkumar.jpg" alt="Nanda Kumar" />
          </div>
        </HeroPhotoFrame>
      </div>
    </section>
  );
};

export default Hero;
