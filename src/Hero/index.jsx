// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center min-vh-100 bg-light position-relative container">
      {/* Toggle icon */}
      <div className="position-absolute top-0 start-0 m-3">
        <div className="theme-toggle logo">
          <img src="/logo.svg" />
        </div>
      </div>

      {/* CV Button */}
      <div className="position-absolute top-0 end-0 m-3">
        <Button
          variant="light"
          size='lg'
          as="a"
          href="/Jamir_Khan_Resume.pdf"
          download
          className='bg-white base-font-size'
        >
          Resume
        </Button>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <img
              src="/photo.jpg" // Replace with your image path
              alt="Jamir Khan"
              className="rounded-circle mb-5 hero-photo"
            />

            <h5 className="display-5"><strong>Jamir Khan</strong></h5>
            <div className='d-flex align-items-center justify-content-center my-3'>
              {/* <h1 className="display-4 mb-0"><strong>Fullstack</strong></h1> */}
              {/* <img src="/logo.svg" className='mx-3 opacity-25' /> */}
              <h1 className="display-2 mb-0"><strong>Fullstack Developer</strong></h1>
            </div>
            {/* <h5 className="display-5 mb-4"><strong>Based in Pune.</strong></h5> */}

            <p className="text-muted mb-5">
              I help startups and growing businesses build scalable, accessible, and high-performance web applications using Ruby on Rails and React. With over 10 years of experience, I bring clean code, strategic thinking, and full-stack execution to every project.
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
