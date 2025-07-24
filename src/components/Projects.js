import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './Projects.css'; // Import the CSS file for styles

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI/ML', 'Automation', 'Web Development'];
  const works = [
    { 
      title: 'Process Rite', 
      category: 'Automation', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'An automation solution streamlining processes effectively.' 
    },
    { 
      title: 'Data Migration', 
      category: 'Web Development', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'A project focused on seamless data transfer and integrity.' 
    },
    { 
      title: 'CloudOptiTrack', 
      category: 'AI/ML', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'Optimizing cloud operations with intelligent tracking.' 
    },
    { 
      title: 'Documentary LLM', 
      category: 'AI/ML', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'A language model designed for document summarization.' 
    },
    { 
      title: 'Rite Bot', 
      category: 'AI/ML', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'An AI-driven chatbot for seamless user interactions.' 
    },
    { 
      title: 'Object Detection and Face Recognition', 
      category: 'AI/ML', 
      image: 'https://via.placeholder.com/300x200', 
      description: 'An AI-based project for real-time object and face recognition.' 
    },
  ];

  const filteredWorks = activeCategory === 'All' ? works : works.filter(work => work.category === activeCategory);

  return (
    <Box sx={{ bgcolor: '#1a1a2e', color: '#fff', py: 5, px: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Recent Works
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        A showcase of my expertise in AI/ML, automation, and web development, solving complex challenges with innovative solutions.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(category)}
            variant="contained"
            sx={{
              mx: 1,
              my: 1,
              bgcolor: activeCategory === category ? '#6a5acd' : '#333',
              transition: 'background-color .7s',
              '&:hover': { bgcolor: '#6a5acd' },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Grid container spacing={3}>
        {/* Existing project cards */}
        {filteredWorks.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                bgcolor: '#333', 
                color: '#fff', 
                borderRadius: 2, 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  bgcolor: '#444'
                }
              }}
            >
              <CardMedia component="img" height="140" image={work.image} alt={work.title} />
              <CardContent>
                <Typography variant="h6">{work.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#bbb' }}>
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* Google Apps Desktop Snapcraft Card */}
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box className="snapcraft-card">
            <Box className="snapcraft-card-header">
              <img
                src="https://dashboard.snapcraft.io/site_media/appmedia/2025/05/icon_SzSk04L.png"
                alt="Google Apps Desktop snap"
                className="snapcraft-card-icon"
              />
              <Box>
                <Typography
                  variant="h5"
                  className="snapcraft-card-title"
                >
                  Google Apps Desktop
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="snapcraft-card-author"
                >
                  by Nanda Kumar Matha (n-incognito)
                </Typography>

              </Box>
            </Box>
            <a
              href="https://snapcraft.io/google-apps-desktop"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 24,
                justifyContent: 'center',
                width: '100%',
                maxWidth: 200,
              }}
            >
              <img
                alt="Get it from the Snap Store"
                src="https://snapcraft.io/en/dark/install.svg"
                style={{
                  height: 48,
                  margin: 0,
                  width: '100%',
                  maxWidth: 180,
                  objectFit: 'contain',
                }}
              />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
