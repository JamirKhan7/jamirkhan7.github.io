import React from "react";
import Hero from './Hero';
import './portfolio.scss';


export default function Portfolio() {
  return (
    <div className="bg-light text-dark font-sans">
      <Hero />

      {/* About Section */}
      <section className="container py-5">
        <h2 className="h2 mb-4">About Me</h2>
        <p className="fs-5 mb-3">
          I'm a seasoned full stack developer with over 10 years of experience building scalable web applications.
          Currently working as a Tech Lead at MangoApps, I specialize in Ruby on Rails and React.
        </p>
        <p className="fs-5">
          I enjoy mentoring teams, modernizing legacy systems, and creating clean, maintainable code.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="h2 text-center mb-5">Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Enterprise Collaboration Tool</h5>
                  <p className="card-text">Built with Rails 8, React, MySQL. Features messaging, video calls, and document sharing.</p>
                  <a href="#" className="card-link">View on GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Legacy System Modernization</h5>
                  <p className="card-text">Led migration of a monolithic Rails app to a modular microservices architecture.</p>
                  <a href="#" className="card-link">Read Case Study</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-3">Get in Touch</h2>
          <p className="fs-5 mb-4">Feel free to reach out via email or connect on LinkedIn.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="mailto:your.email@example.com" className="btn btn-outline-primary">Email Me</a>
            <a href="https://linkedin.com/in/jamirkhan" className="btn btn-outline-secondary">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
