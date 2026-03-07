
import { useEffect, useState } from "react";

import student from "../../assets/Images/student.jpg"
import Partners from "../Partners/Partners";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <>
      
      <div className="page">
        {/* ══ SECTION 1: HERO ══ */}
        {/* <div className="hero-wrap">
          <div className="dot-tl" />
          <div className="dot-tr" />
          <div className="diag-tr" />
          <div className="hero-inner">
            <p className="brand-tag">Ascencia Malta</p>
            <h1 className="hero-h1">
              We Are Eager To Give You{" "}
              <span className="red">The<br />Best Education</span>
            </h1>
            <p className="hero-p">
              Ascencia's ambition is to realize your potential of ascension. Through an individualized
              follow-up of the students, our teams are at your service for your future: come and present
              us your projects, and we will do our best to help you realize them.
            </p>
          </div>
        </div> */}

        <div className="hero-wrap">
          <div className="hero-inner">

            <p className="brand-tag">ASCENCIA MALTA</p>

            <h1 className="hero-h1">
              WE ARE EAGER TO GIVE YOU
              <span className="red"> THE BEST EDUCATION</span>
            </h1>

            <p className="hero-p">
              Ascencia's ambition is to realize your potential of ascension. Through an individualized
              follow-up of the students, our teams are at your service for your future.
            </p>

          </div>
        </div>

       

        <div className="about-wrap">

          <div className="about-circle">
            <img src={student} alt="Student in classroom" />
          </div>

          <div className="about-text">
            <span className="sec-tag">About</span>

            <h2 className="about-h2">
              A participative and innovative <br /> pedagogy
            </h2>

            <p className="about-p">
              Our training courses are based on a participative and innovative pedagogy based on the value of the example and the constant exchange between learners and experienced professionals. The realities of corporate life are at the heart of the personalized learning methods we use. They are intended to identify potentials and to hatch vocations of managers and business developers. Our campus is also open to all international candidates who wish to study management in Malta.
            </p>

            <span className="sec-tag">Mission</span>

            <p className="mission-p">
              At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community.
            </p>
          </div>

        </div>
        <hr/>

      
        <section className="values" style={{backgroundColor:"black"}}>
          <div className="values-container">

            <p className="values-tag">OUR VALUES</p>

            <h2 className="values-title">
              Excellence, a priority for Ascencia
            </h2>

            <div className="values-grid">

              <div className="value-item">
                <h3>Openness to International Markets</h3>
                <p>
                  This is our purpose. Our programs have been specifically designed to
                  host international students and enable French students to do their
                  internship in the English language or part of their training in another
                  country, at the heart of the international system: an excellent French
                  language school, a network of representative offices and university
                  partners.
                </p>
              </div>

              <div className="value-item">
                <h3>Teaching Excellence</h3>
                <p>
                  The member schools of Ascencia are all recognised in their specialised
                  domains and prepare graduates to achieve insertion in world job
                  markets. The faculty comprises an academic lecturing body and the best
                  professional players. All the programs lead to a state-recognised
                  certification.
                </p>
              </div>

              <div className="value-item">
                <h3>Job Access</h3>
                <p>
                  Because each training course corresponds to a personal ambition, all
                  our students receive individual attention. The success of each student
                  is our priority. Our teams accompany each student in the success of his
                  project. Professional integration, promoted by work-linked training, is
                  our top priority.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ══ SECTION 4: OUR TUTORS ══ */}
        <div className="tutors-wrap">
          <div className="tutors-text">
            <span className="sec-tag">Our Tutors</span>
            <h2 className="tutors-h2">
              Some special teachers<br />from the Industry!
            </h2>
            <p className="tutors-p">
              At Ascencia Malta, you'll experience a friendly and welcoming student-centred learning environment.
            </p>
            <p className="tutors-p">
              Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build
              their professional and academic qualifications through a career path that meets their interests
              and aspirations in their chosen career.
            </p>
            <p className="tutors-p">
              Ascencia Malta lecturers support, mentor and guide you through the skills, knowledge and
              practical work experience to achieve your goals.
            </p>
          </div>
          <div className="tutors-img">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85"
              alt="Students with laptops"
            />
          </div>
        </div>

      </div>
      <hr/>
      <Partners />
    </>
  );
}