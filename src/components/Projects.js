import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './Projects.css'; // Import the CSS file for styles

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI/ML', 'Automation', 'Web Development'];
  const works = [
    { 
      title: 'Omada Ai', 
      category: 'AI/ML', 
      image: 'omada.png', 
      description: 'An AI-powered marketing platform with agentic tools to generate content and automate tasks.' 
    },
    { 
      title: 'Process Rite', 
      category: 'Automation', 
      image: 'pr.png', 
      description: 'An automation solution streamlining processes effectively.' 
    },
    { 
      title: 'Data Migration', 
      category: 'Web Development', 
      image: 'dataprc.png', 
      description: 'A project focused on seamless data transfer and integrity.' 
    },
    { 
      title: 'CloudOptiTrack', 
      category: 'Automation', 
      image: 'cloudOpt.png', 
      description: 'Optimizing cloud operations with intelligent tracking.' 
    },
    { 
      title: 'Documentary LLM', 
      category: 'AI/ML', 
      image: 'llm.png', 
      description: 'A language model designed for document summarization.' 
    },
    { 
      title: 'Rite Bot', 
      category: 'AI/ML', 
      image: 'bot.png', 
      description: 'An AI-driven chatbot for seamless user interactions.' 
    },
     { 
      title: 'Dermatology Image Classification', 
      category: 'AI/ML',
      image: 'derm_clasf.png',
      description: 'A project focused on classifying dermatological images using deep learning techniques.'
    },
    { 
      title: 'Objects & Face Recognition', 
      category: 'AI/ML', 
      image: 'odfr.png', 
      description: 'An AI-based project for real-time object and face recognition.' 
    },
  ];

  const filteredWorks = activeCategory === 'All' ? works : works.filter(work => work.category === activeCategory);

  return (
    <Box sx={{ bgcolor: '#4852e71f', color: '#fff', py: 5, px: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Recent Works
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
              <CardMedia component="img" height="200" image={work.image} alt={work.title} sx={{ objectFit: "cover" }}/>
              <CardContent>
                <Typography variant="h6">{work.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#bbb' }}>
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Separate Snapcraft card with top margin */}
      <Box sx={{ mt: 6 }}>
        <Grid container justifyContent="center">
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
    </Box>
  );
};

export default Projects;
