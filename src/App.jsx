import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';
import { useScrollEffects } from './hooks/useScrollEffects';
import CollapsibleExample from './Navbar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  useScrollEffects();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CollapsibleExample />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: '64px',
          px: { xs: 1.25, sm: 2, md: 3 },
        }}
      >
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume" className="section-scroll">
          <Resume />
        </section>
        <section id="skills" className="section-scroll">
          <Skills />
        </section>
        <section id="contact" className="section-scroll">
          <Contact />
        </section>
      </Container>
      <Footer /> {/* Add the Footer component */}
    </ThemeProvider>
  );
}

export default App;
