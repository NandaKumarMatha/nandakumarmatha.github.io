import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme';
import CollapsibleExample from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CollapsibleExample />
      <Container sx={{ paddingTop: '64px' }}> {/* Add top padding */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Container>
      <Footer /> {/* Add the Footer component */}
    </ThemeProvider>
  );
}

export default App;
