import React from 'react'
import { FaPlay } from "react-icons/fa";
import "./About.css"
function About() {
  return (
    <div>
       <section className="about-section">
      <div className="container">
        {/* About text - centered like screenshot */}
        <div style={{maxWidth:700, margin:"0 auto 60px"}}>
          <h2 style={{fontSize:"clamp(26px,3vw,38px)",fontWeight:900,color:"#1a1a1a",marginBottom:18}}>
            About <span style={{color:"var(--red)"}}>Ascencia Malta</span>
          </h2>
          <p style={{fontSize:14,color:"#444",lineHeight:1.85,marginBottom:28}}>
            Ascencia Malta is located in Floriana – right on the doorstep of Valletta. Floriana was meant to be a suburb of Valletta, but it developed to be a town on its own. A short walk separates the two towns. It isn't easy to understand where Floriana finishes and Valletta starts, but the iconic entry to the capital is part of Floriana. Floriana sits in the very heart of the Maltese islands, with roads leading to all the bustling and major cities in Malta, so we can say that all the roads lead to Floriana – meaning that all the buses will bring you here as well.
          </p>
          <button className="btn-red">READ MORE</button>
        </div>

        {/* Why Floriana */}
        <div className="why-floriana-wrap">
          <div style={{display:"flex",justifyContent:"center"}}>
            <div className="why-img-circle"/>
          </div>
          <div className="why-content">
            <span className="sec-label">STUDY IN MALTA</span>
            <h3 className="why-title">Why Floriana?</h3>
            {["Because of History","Architecture","Public gardens","Music festivals","Its authenticity"].map((item,i)=>(
              <div key={i} className="why-item">
                <div className="why-item-icon"><FaPlay size={14}/></div>
                <span className="why-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
