import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './skills.scss';

const skills = [
  { title: 'Ruby on Rails', logo: '/skills/ruby_on_rails.svg', logo_class: 'skills-ruby-on-rails-logo' },
  { title: 'React', logo: '/skills/react.svg' },
  { title: 'MySQL', logo: '/skills/mysql.svg' },
  { title: 'JavaScript (ES6+)' },
  { title: 'HTML5' },
  { title: 'CSS3' },
  { title: 'SCSS' },
  { title: 'Bootstrap' },
  { title: 'Git' },
  { title: 'Visual Studio Code' }
];

const Skills = () => {
  return (
    <section className="bg-light">
      <Container className='section-container education-section '>
        <h2 className="mb-2 fw-normal">Skills</h2>
        <p className="text-body-secondary mb-5">The skills, tools and technologies I use:</p>
        <Row className="g-3">
          {skills.map((skill, index) => (
            <Col key={index} md={2}>
              <Card className="h-100 border-0 rounded-3 p-3">
                <img src={skill.logo} className={`skills-logo ${skill.logo_class}`} />
                <Card.Title className='h6 mb-0'>{skill.title}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 