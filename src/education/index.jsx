import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const education = [
  {
    institution: "NIBM",
    location: "Chennai",
    degree: "Masters of Business Administration",
    year: "2014",
  },
  {
    institution: "NIBM",
    location: "Chennai",
    degree: "Bachelor of Business Administration",
    year: "2012",
  }
];

const Education = () => {
  return (
    <section className="bg-light">
      <Container className='section-container education-section'>
        <h2 className="mb-2 fw-normal">Education</h2>
        <p className="text-body-secondary mb-5">My academic journey and continuing education</p>

        <Row className="g-4">
          {education.map((edu, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 rounded-3 p-3">
                <Card.Title className='h6'>{edu.degree}</Card.Title>
                <Card.Text className="text-muted">{edu.institution} / {edu.location}</Card.Text>
                <Card.Text className="text-muted">{edu.year}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education; 