import React from 'react';
import './about.css';
import AboutImg from "../../assets/assets/about.jpeg";
import CV from "../../assets/assets/Phillip-Cv.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about_container container grid">
              <img src={AboutImg} alt="about picture" className="about_img" />
              <div className="div about_data"></div>

            </div>
    </section>
  )
}

export default About