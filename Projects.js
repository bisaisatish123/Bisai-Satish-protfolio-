import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'VQuiz - MCQ\'s Mobile Application',
      description: 'A mobile application for Multiple Choice Questions quizzes built with MERN stack.',
      technologies: [
        { name: 'React.js', type: 'frontend' },
        { name: 'Node.js', type: 'backend' },
        { name: 'Express.js', type: 'backend' },
        { name: 'MongoDB', type: 'database' }
      ],
      features: [
        'Interactive quiz interface',
        'User authentication',
        'Real-time score tracking',
        'Performance analytics'
      ]
    },
    {
      title: 'LMS - Learning Management System',
      description: 'A Learning Management System built with MERN stack for online education and course management.',
      technologies: [
        { name: 'React.js', type: 'frontend' },
        { name: 'Node.js', type: 'backend' },
        { name: 'Express.js', type: 'backend' },
        { name: 'MongoDB', type: 'database' }
      ],
      features: [
        'Course management',
        'Student enrollment',
        'Assignment system',
        'Progress tracking'
      ]
    }
  ];

  return (
    <div className="projects-section section">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card h-100">
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies mb-3">
                    <h6 className="mb-2 fw-bold small">Technologies:</h6>
                    <div className="tech-badges">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          bg={tech.type === 'frontend' ? 'primary' : tech.type === 'backend' ? 'success' : 'info'}
                          className="tech-badge"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h6 className="mb-2 fw-bold small">Features:</h6>
                    <ul className="features-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
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

export default Projects;

