import React from "react";
import Services from './services';
import './portfolio.scss';
import Experience from './experience';
import Education from './education';
import Skills from "./skills";
import Contact from './contact';
import Hero from './hero';


export default function Portfolio() {
  return (
    <div className="text-dark font-san portfolio-main">
      <Hero />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}
