import React from 'react';
import "./assets/about_Page.scss";
import ExperienceBlock from "./components/About/ExperienceBlock";
import WorkBlock from "./components/About/WorkBlock";
import CarryBlock from "./components/About/CarryBlock";
import ViewCVButton from "./components/About/ViewCVButton";
import AboutImage from "./components/About/AboutImage";

const About = () => {
  return (
    <section className="about" id="about">
      <header className="about__header">
        <h2 className="about__title">About me</h2>
        <p className="about__subtitle">my introduction</p>
      </header>
      
      <div className="about__content">
        <AboutImage />
        
        <div className="about__details">
          <div className="about__stats">
            <ExperienceBlock />
            <WorkBlock />
            <CarryBlock />
          </div>
          
          <div className="about__description">
            I am a front-end developer with 3 years of experience in various web
            agencies. Interested in design, web development and learning new
            technologies. With the aim of being a creative developer.
          </div>
          
          <div className="about__actions">
            <ViewCVButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
