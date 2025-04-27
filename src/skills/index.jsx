import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './skills.scss';

const skills = [
  { title: 'Ruby on Rails', logo: '/skills/ruby_on_rails.svg', logo_class: 'skills-ruby-on-rails-logo' },
  { title: 'React', logo: '/skills/react.svg' },
  { title: 'JavaScript (ES6+)', logo: '/skills/javascript.svg' },
  { title: 'MySQL', logo: '/skills/mysql.svg' },
  { title: 'HTML5', logo: '/skills/html5.svg' },
  { title: 'CSS3', logo: '/skills/css3.svg' },
  { title: 'SASS', logo: '/skills/sass.svg' },
  { title: 'Bootstrap', logo: '/skills/bootstrap.svg' },
  { title: 'Git', logo: '/skills/git.svg' },
  { title: 'Visual Studio Code', logo: '/skills/vscode.svg' },
  { title: 'NodeJS', logo: '/skills/nodejs.svg' }
];

const Skills = () => {
  return (
    <section className="bg-light">
      <Container className='section-container education-section '>
        <h2 className="mb-2 fw-normal">Skills</h2>
        <p className="text-body-secondary mb-5">The skills, tools and technologies I use:</p>
        <Row className="g-3">
          {skills.map((skill, index) => (
            <Col key={index} md={3}>
              <Card className="h-100 border-0 rounded-3 p-3 flex-row align-items-center">
                <img src={skill.logo} className={`skills-logo ${skill.logo_class || ''}`} />
                <Card.Title className='mb-0 ms-3 base-font-size fw-normal'>{skill.title}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 