import React from 'react';
import { Container } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const frontendTech = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Bootstrap', icon: '📱' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' }
  ];

  const backendTech = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }
  ];

  const databaseTech = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🗄️' }
  ];

  const fullStackCapabilities = [
    'RESTful API development',
    'Client–server architecture',
    'CRUD operations',
    'Authentication & authorization',
    'Database integration with frontend & backend'
  ];

  // Combine all skills into one array
  const allSkills = [...frontendTech, ...backendTech, ...databaseTech];

  return (
    <div className="skills-section section">
      <Container>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon && <span className="skill-icon-item">{skill.icon}</span>}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        
        <div className="fullstack-section">
          <h3 className="fullstack-title">
            <span className="skill-icon">🔗</span>
            Full Stack Capabilities
          </h3>
          <div className="capabilities-container">
            {fullStackCapabilities.map((capability, index) => (
              <div key={index} className="capability-item">
                <span className="check-icon">✓</span>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;

