// src/components/ServicesSection.jsx
import { Card, Container, Row, Col } from 'react-bootstrap';
import './services.scss';

const services = [
  {
    // icon: <FontAwesomeIcon icon={faCodeBranch} />,
    icon: 'code',
    title: 'Full-Stack Development',
    description: 'Over 10 years of experience building scalable web applications using Ruby on Rails, React, and modern JavaScript frameworks. Focused on responsive UI, performance, and accessibility.',
  },
  {
    icon: 'construction',
    title: 'Legacy Upgrades & Optimization',
    description: 'Leading modernization of outdated and vulnerable codebases by upgrading libraries, improving architecture, and ensuring long-term maintainability.',
  },
  {
    icon: 'work',
    title: 'Enterprise Features',
    description: 'Designed and delivered enterprise modules like News Feed, Dashboards, and Surveys. Also building custom freelance projects using Rails, React, and Bootstrap.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section py-5 bg-light">
      <Container>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 rounded-3 p-3">
                <div className="icon-wrapper mb-3 rounded-2"><span className="material-symbols-outlined">{service.icon}</span></div>
                <Card.Title className='h6'>{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
