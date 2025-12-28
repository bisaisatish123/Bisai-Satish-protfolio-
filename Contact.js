import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'bisai.satish@example.com',
      link: 'mailto:bisai.satish@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/bisai-satish',
      link: 'https://linkedin.com/in/bisai-satish'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/bisai-satish',
      link: 'https://github.com/bisai-satish'
    }
  ];

  return (
    <div className="contact-section section">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <Row className="g-4">
          <Col lg={8} className="mx-auto">
            <Card className="contact-card">
              <Card.Body className="p-4">
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}
                <Row>
                  <Col md={6}>
                    <div className="contact-info mb-4">
                      <h4 className="mb-4">Contact Information</h4>
                      {contactInfo.map((info, index) => (
                        <div key={index} className="contact-item mb-3">
                          <div className="contact-icon">{info.icon}</div>
                          <div className="contact-details">
                            <h6 className="contact-label">{info.title}</h6>
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="contact-value"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                  <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Subject"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message..."
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" size="lg" className="w-100">
                        Send Message
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

