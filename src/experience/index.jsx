import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container py-5">
      <h2 className="fw-bold mb-3">Experience</h2>
      <p className="text-muted mb-4">My professional journey in software development</p>
      <div className="row fw-bold text-uppercase text-secondary border-bottom pb-2 mb-3">
        <div className="col-md-4">Company</div>
        <div className="col-md-4">Position</div>
        <div className="col-md-4">Year</div>
      </div>
      {experiences.map((exp, idx) => (
        <div
          className="row align-items-start py-2 border-bottom"
          key={idx}
        >
          <div className="col-md-4">
            <strong>{exp.company}</strong> <span className="text-muted">/ {exp.location}</span>
          </div>
          <div className="col-md-4">{exp.position}</div>
          <div className="col-md-4 text-muted">{exp.years}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
