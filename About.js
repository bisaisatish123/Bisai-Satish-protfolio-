import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-section section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-image-wrapper">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + '/images/profile.jpg'}
                    alt="BISAI SATISH - Full Stack Developer"
                    className="profile-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-image-fallback">
                    <span>BS</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-content">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <span className="text-primary">BISAI SATISH</span>
              </h1>

              <h2 className="h3 mb-4 text-secondary">
                Full Stack Web Developer
              </h2>

              <p className="lead mb-4">
                Passionate full stack developer with expertise in building scalable web applications
                using modern technologies. I specialize in creating seamless user experiences
                with robust backend systems and efficient database management.
              </p>

              <p className="mb-4">
                With a strong foundation in both frontend and backend technologies, I bring
                end-to-end solutions to life. From designing intuitive user interfaces to
                implementing secure server-side logic and optimizing database performance,
                I ensure every project meets the highest standards of quality and functionality.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" href="#contact">
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
