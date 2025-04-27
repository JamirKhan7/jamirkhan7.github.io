import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero-section container section-container">
      <div className='hero-header'>
        <div className="theme-toggle logo">
          <img src="/logo.svg" />
        </div>


        <Button
          variant="primary"
          size='lg'
          as="a"
          href="/Jamir_Khan_Resume.pdf"
          download
          className='base-font-size d-flex align-items-center text-white'
        >
          <span className="material-symbols-outlined me-1">download</span>Resume
        </Button>
      </div>

      <div className='hero-section-content'>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className='pb-4'>
              <img
                src="/photo.jpg" // Replace with your image path
                alt="Jamir Khan"
                className="rounded-circle hero-photo"
              />
            </div>

            <h5 className="h3 text-uppercase text-body-secondary fw-semibold mb-3">Jamir Khan</h5>
            <h1 className="display-2 mb-3"><strong>Fullstack Developer</strong></h1>

            <p className="text-muted mb-5">
              I help startups and growing businesses build scalable, accessible, and high-performance web applications using Ruby on Rails and React. With over 10 years of experience, I bring clean code, strategic thinking, and full-stack execution to every project.
            </p>

            {/* Call to Action */}
            {/* <Button variant="dark" size="lg">Hire me</Button> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
