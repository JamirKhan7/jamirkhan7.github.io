import React from 'react';
import './education.scss';

const education = [
  {
    institution: "NIBM",
    location: "Chennai",
    degree: "Masters of Business Administration",
    year: "2014",
  },
  {
    institution: "NIBM",
    location: "Chennai",
    degree: "Bachelor of Business Administration",
    year: "2012",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="institution">{edu.institution}</h3>
              <p className="location">{edu.location}</p>
              <p className="degree">{edu.degree}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 