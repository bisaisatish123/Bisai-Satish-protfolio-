import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    lastScroll.current = window.pageYOffset || 0;
    const handleScroll = () => {
      const current = window.pageYOffset || 0;
      if (current <= 0) {
        setShowNav(true);
        lastScroll.current = current;
        return;
      }
      if (current > lastScroll.current && current > 100) {
        setShowNav(false);
      } else if (current < lastScroll.current) {
        setShowNav(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" className={`custom-navbar ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="container">
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            BISAI SATISH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#certifications">Certifications</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <section id="home">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="bg-dark text-light text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; 2024 BISAI SATISH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

