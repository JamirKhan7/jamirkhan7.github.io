import { Col, Container, Row } from 'react-bootstrap';
import './contact.scss';
import LinkedinIcon from '../common/icons/LinkedinIcon';
import GithubIcon from '../common/icons/GithubIcon';

const Contact = () => {
  return (
    <section className="" >
      <Container className='section-container'>
        <h2 className="mb-2 fw-normal">Contact</h2>
        <p className="text-body-secondary mb-5">Let's Build Something Great Together!</p>

        <Row className="g-3">
          <Col md={3}>
            <div className='fw-semibold text-body-tertiary'>Phone</div>+91 81808 75279
          </Col>
          <Col md={3}>
            <div className='fw-semibold text-body-tertiary'>Email</div>jamirkhan007@gmail.com
          </Col>
          <Col md={4}>
            <div className='fw-semibold text-body-tertiary'>Location</div>670, Dattawadi, Pune – 411030, India.
          </Col>
          <Col md={2} className=''>
            <a href='https://www.linkedin.com/in/jamir-khan-52bb565a/' className='footer-icon-link me-3'>
              <LinkedinIcon />
            </a>
            <a href='https://github.com/JamirKhan7' className='footer-icon-link'>
              <GithubIcon />
            </a>

          </Col>
        </Row>
      </Container>
    </section>);
};

export default Contact;