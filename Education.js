import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor\'s Degree in Computer Science',
      institution: 'VISAKHA INSTITUTE OF ENGINEERING & TECHNOLOGY AUTONOMOUS',
      period: '2025 - 2025',
      description: 'Comprehensive study of computer science fundamentals, software engineering, data structures, algorithms, and web development.',
      achievements: [
        'Specialized in Full Stack Web Development',
        'Completed projects in React.js and Node.js',
        'Database management and design',
        'Software engineering principles'
      ]
    }
  ];

  return (
    <div className="education-section section">
      <Container>
        <h2 className="section-title">Education</h2>
        <Row className="g-4">
          {educationData.map((edu, index) => (
            <Col lg={8} className="mx-auto" key={index}>
              <Card className="education-card">
                <Card.Body className="p-4">
                  <div className="education-header mb-3">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <h5 className="education-institution text-primary">{edu.institution}</h5>
                    <p className="education-period text-muted">{edu.period}</p>
                  </div>
                  <p className="education-description mb-3">{edu.description}</p>
                  <div className="education-achievements">
                    <h6 className="mb-2 fw-bold">Key Achievements:</h6>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education;

