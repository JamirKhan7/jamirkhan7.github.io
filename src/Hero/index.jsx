// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center min-vh-100 bg-light position-relative container">
      {/* Toggle icon */}
      <div className="position-absolute top-0 start-0 m-3">
        <div className="theme-toggle bg-dark rounded-circle text-white logo">JK</div>
      </div>

      {/* CV Button */}
      <div className="position-absolute top-0 end-0 m-3">
        <Button 
          variant="light" 
          as="a" 
          href="/Jamir_Khan_Resume.pdf" 
          download
        >
          Get my CV
        </Button>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Profile Photo */}
            <img
              src="/photo.jpg" // Replace with your image path
              alt="Jamir Khan"
              className="rounded-circle mb-4 hero-photo"
            />

            {/* Name */}
            <h5 className="text-uppercase text-secondary mb-2">Jamir Khan</h5>

            {/* Title */}
            <h1 className="display-3 mb-3">Full Stack Developer</h1>

            {/* Description */}
            <p className="text-muted mb-4">
              Specialized in scalable enterprise applications with 10+ years of experience.
              Passionate about building performant, accessible, and user-friendly solutions.
            </p>

            {/* Call to Action */}
            {/* <Button variant="dark" size="lg">Hire me</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
