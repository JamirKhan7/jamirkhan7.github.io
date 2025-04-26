import React from "react";
import Hero from './hero';
import Services from './services';
import './portfolio.scss';
import Experience from './experience';
import Education from './education';
import Skills from "./skills";


export default function Portfolio() {
  return (
    <div className="text-dark font-san portfolio-main">
      <Hero />
      <Services />
      <Experience />
      <Education />
      <Skills />

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="h2 mb-3">Get in Touch</h2>
          <p className="fs-5 mb-4">Feel free to reach out via email or connect on LinkedIn.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="mailto:jamirkhan007@gmail.com" className="btn btn-outline-primary">Email Me</a>
            <a href="https://www.linkedin.com/in/jamir-khan-52bb565a/" className="btn btn-outline-secondary">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
