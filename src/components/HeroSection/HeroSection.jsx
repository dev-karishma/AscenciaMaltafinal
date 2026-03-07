import React from "react";
import "./HeroSection.css";
import student from "../assets/Images/student"

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <p className="small-title">ASCENCIA MALTA</p>

        <h1 className="hero-title">
          WE ARE EAGER TO GIVE YOU{" "}
          <span className="red-text">THE BEST EDUCATION</span>
        </h1>

        <p className="hero-desc">
          Ascencia’s ambition is to realize your potential of ascension.
          Through an individualized follow-up of the students, our teams are at
          your service for your future: come and present us your projects, and
          we will do our best to help you realize them.
        </p>

        <div className="about-section">

          <div className="image-circle">
            <img src={student} alt="student" />
          </div>

          <div className="about-text">
            <p className="about-small">ABOUT</p>
            <h2>A participative and innovative pedagogy</h2>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;