import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './Projects.css'; // Import the CSS file for styles
import { projectsData } from '../../data/projectsData';

const cardTiltHandlers = {
  onMouseMove: (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--tilt-y', `${px * -14}deg`);
    el.style.setProperty('--tilt-x', `${py * 14}deg`);
  },
  onMouseLeave: (e) => {
    const el = e.currentTarget;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI/ML', 'Automation', 'Web Development'];


  const works = projectsData;

  const filteredWorks = activeCategory === 'All' ? works : works.filter(work => work.category === activeCategory);

  return (
    <Box
      className="projects-section"
      sx={{
        bgcolor: '#4852e71f',
        color: '#fff',
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 1.25, sm: 2, md: 3 },
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        className="projects-section__title"
        variant="h4"
        align="center"
        gutterBottom
        sx={{ px: 0.5, wordBreak: 'break-word' }}
      >
        Recent Works
      </Typography>
      <Typography
        className="projects-section__intro"
        variant="body1"
        align="center"
        sx={{ mb: 4, px: { xs: 0.5, sm: 2 }, wordBreak: 'break-word' }}
      >
        A showcase of my expertise in AI/ML, automation, and web development, solving complex challenges with innovative solutions.
      </Typography>
      <Box className="projects-section__filters" sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(category)}
            variant="contained"
            sx={{
              mx: 0.75,
              my: 1,
              px: { xs: 1.5, sm: 2 },
              maxWidth: '100%',
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
              textAlign: 'center',
              lineHeight: 1.3,
              bgcolor: activeCategory === category ? '#6a5acd' : '#333',
              transition:
                'background-color .45s ease, transform .25s ease, box-shadow .25s ease',
              border: '1px solid rgba(135, 80, 247, 0.2)',
              '&:hover': {
                bgcolor: '#6a5acd',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 24px rgba(0,0,0,0.35), 0 0 20px rgba(135, 80, 247, 0.25)',
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Grid className="projects-section__grid" container spacing={3}>
        {filteredWorks.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ minWidth: 0, display: 'flex' }}>
            <div className="project-card-scroll-wrap">
            <Card
              className="project-card-tilt"
              {...cardTiltHandlers}
              sx={{
                bgcolor: '#333',
                color: '#fff',
                borderRadius: 2,
                border: '1px solid rgba(135, 80, 247, 0.18)',
                height: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                maxWidth: '100%',
                overflow: 'hidden',
                transform:
                  'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateZ(0)',
                transformStyle: 'preserve-3d',
                transition:
                  'transform 0.18s ease-out, box-shadow 0.35s ease, background-color 0.35s ease, border-color 0.35s ease',
                '&:hover': {
                  boxShadow:
                    '0 20px 40px rgba(0, 0, 0, 0.45), 0 0 32px rgba(135, 80, 247, 0.25)',
                  bgcolor: '#3d3d4a',
                  borderColor: 'rgba(135, 80, 247, 0.45)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={work.image}
                alt={work.title}
                sx={{ objectFit: 'cover', flexShrink: 0, maxWidth: '100%' }}
              />
              <CardContent
                sx={{
                  flex: '1 1 auto',
                  minWidth: 0,
                  overflow: 'hidden',
                  pt: 2,
                  '&:last-child': { pb: 2 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}
                >
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: '#bbb',
                    mt: 0.5,
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                  }}
                >
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
            </div>
          </Grid>
        ))}
      </Grid>

      <Box className="projects-section__snap" sx={{ mt: 6, width: '100%', maxWidth: '100%' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={6} sx={{ minWidth: 0, display: 'flex' }}>
            <div className="projects-snap-scroll-wrap">
            <Box className="snapcraft-card">
              <Box className="snapcraft-card-header">
                <img
                  src="https://dashboard.snapcraft.io/site_media/appmedia/2025/05/icon_SzSk04L.png"
                  alt="Google Apps Desktop snap"
                  className="snapcraft-card-icon"
                />
                <Box className="snapcraft-card-text">
                  <Typography variant="h5" className="snapcraft-card-title">
                    Google Apps Desktop
                  </Typography>
                  <Typography variant="subtitle2" className="snapcraft-card-author">
                    by Nanda Kumar Matha (n-incognito)
                  </Typography>
                </Box>
              </Box>
              <a
                className="snapcraft-card-badge-link"
                href="https://snapcraft.io/google-apps-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="snapcraft-card-badge"
                  alt="Get it from the Snap Store"
                  src="https://snapcraft.io/en/dark/install.svg"
                />
              </a>
            </Box>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ minWidth: 0, display: 'flex' }}>
            <div className="projects-snap-scroll-wrap">
            <Box className="snapcraft-card">
              <Box className="snapcraft-card-header">
                <img
                  src="https://snapcraft.io/parquet-explorer/icon"
                  alt="Parquet Explorer snap"
                  className="snapcraft-card-icon"
                />
                <Box className="snapcraft-card-text">
                  <Typography variant="h5" className="snapcraft-card-title">
                    Parquet Explorer
                  </Typography>
                  <Typography variant="subtitle2" className="snapcraft-card-author">
                    by Nanda Kumar Matha (n-incognito)
                  </Typography>
                </Box>
              </Box>
              <a
                className="snapcraft-card-badge-link"
                href="https://snapcraft.io/parquet-explorer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="snapcraft-card-badge"
                  alt="Get it from the Snap Store"
                  src="https://snapcraft.io/en/dark/install.svg"
                />
              </a>
            </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
