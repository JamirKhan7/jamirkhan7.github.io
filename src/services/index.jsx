// src/components/ServicesSection.jsx
import { Card, Container, Row, Col } from 'react-bootstrap';
import './services.scss';

const services = [
  {
    icon: 'stacks',
    title: 'Full Stack Web Development',
    description: 'I build scalable, full-stack web applications using React for the frontend and Ruby on Rails for the backend — tailored to your business goals and user needs.',
  },
  {
    icon: 'developer_mode_tv',
    title: 'Frontend Modernization & Performance Optimization',
    description: 'I upgrade outdated frontends, improve page speed, ensure cross-browser compatibility, and implement modern, mobile-responsive designs that deliver a better user experience.',
  },
  {
    icon: 'accessibility_new',
    title: 'UI/UX Enhancements with Accessibility Compliance',
    description: 'I design and develop interfaces that are not only beautiful but also accessible (WCAG 2.1 compliant), improving usability for all users, including those with disabilities.',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-container services-section">
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
