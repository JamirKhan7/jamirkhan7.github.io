import React from 'react';

const Skills = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h2 text-center mb-5">Skills & Expertise</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <ul className="list-unstyled">
                  <li>Ruby on Rails</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>Angular</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Dev Tools & Practices</h5>
                <ul className="list-unstyled">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>Visual Studio Code</li>
                  <li>Accessibility (WCAG)</li>
                  <li>Cross-Browser Compatibility</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Team & Process</h5>
                <ul className="list-unstyled">
                  <li>Mentoring</li>
                  <li>Code Reviews</li>
                  <li>Collaboration</li>
                  <li>Feature Ownership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 