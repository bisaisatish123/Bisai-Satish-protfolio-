import React from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Online Platform / Institution',
      date: '2024',
      description: 'Comprehensive certification covering React.js, Node.js, Express.js, MongoDB, and MySQL',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Java'],
      image: process.env.PUBLIC_URL + '/images/WhatsApp Image 2025-12-26 at 9.41.21 PM.jpg',
      duration: '6 months',
      completion: 100,
      note: 'Course completed successfully'
    },
    // Removed other certificates per request — only primary certificate shown
  ];

  return (
    <div className="certifications-section section">
      <Container>
        <h2 className="section-title">Certifications</h2>
        <Row className="g-4">
          {certifications.map((cert, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="certification-card h-100">
                <Card.Body className="p-4">
                  {cert.image ? (
                    <div className="cert-image-wrapper mb-3">
                      <img src={cert.image} alt={`${cert.title} certificate`} className="cert-image" />
                    </div>
                  ) : (
                    <div className="certification-icon mb-3">
                      <span className="cert-badge">🏆</span>
                    </div>
                  )}
                  <Card.Title className="certification-title">{cert.title}</Card.Title>
                  <p className="certification-issuer text-primary mb-2">{cert.issuer}</p>
                  <Badge bg="secondary" className="mb-3">{cert.date}</Badge>
                  <p className="certification-description cert-key">{cert.description}</p>
                  <div className="certification-skills mt-3">
                    <h6 className="mb-2 fw-bold small">Skills Covered:</h6>
                    <div className="skill-tags">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} bg="light" text="dark" className="skill-tag">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {cert.completion !== undefined && (
                    <div className="cert-meter mt-3">
                      <ProgressBar now={cert.completion} label={`${cert.completion}%`} />
                      <div className="cert-completion-note mt-2 small text-muted">
                        <span className="cert-duration">{cert.duration}</span>
                        &nbsp;•&nbsp;
                        <span className="cert-note">{cert.note}</span>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Certifications;

