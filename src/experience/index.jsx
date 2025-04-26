import React from "react";
import './experiences.scss';

const experiences = [
  {
    company: "MangoApps",
    location: "Pune",
    position: "Tech Lead",
    years: "Feb 2023 – Present"
  },
  {
    company: "MangoApps",
    location: "Pune",
    position: "Senior Full Stack Developer",
    years: "Jan 2021 – Feb 2023"
  },
  {
    company: "Fiserv",
    location: "Pune",
    position: "Analyst",
    years: "Jun 2018 – Dec 2020"
  },
  {
    company: "MangoApps",
    location: "Pune",
    position: "Software Developer",
    years: "Jul 2015 – Jun 2018"
  },
  {
    company: "ClearPoint Learning Systems",
    location: "Pune",
    position: "Senior Developer",
    years: "Apr 2014 – Jul 2015"
  }
];

const Experience = () => {
  return (
    <section className="section-container container">
      <h2 className="mb-2 fw-normal">Experience</h2>
      <p className="text-body-secondary mb-5">My professional journey in software development</p>
      <div className="row fw-semibold text-uppercase text-body-tertiary g-0 experience-row">
        <div className="col-md-4">Position</div>
        <div className="col-md-4">Company</div>
        <div className="col-md-4">Year</div>
      </div>
      {experiences.map((exp, idx) => (
        <div
          className="row align-items-start g-0 experience-row"
          key={idx}
        >
          <div className="col-md-4 fw-bold">{exp.position}</div>
          <div className="col-md-4">
            {exp.company} <span className="text-body-tertiary">/ {exp.location}</span>
          </div>
          <div className="col-md-4 text-body-tertiary">{exp.years}</div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
