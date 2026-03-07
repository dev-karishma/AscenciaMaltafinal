

import React from "react";
import "./AccreditationSection.css";

import mqf from "../../assets/Images/mqf.png";
import elt from "../../assets/Images/elt.png";
import athe from "../../assets/Images/athe.png";
import eqf from "../../assets/Images/eqf.png";
import aacsb from "../../assets/Images/aacsb.png";
import member from "../../assets/Images/member.png";
import amte from "../../assets/Images/amte.png";

const AccreditationSection = () => {
  return (
    <section className="accreditation">

      <div className="accreditation-container">

        <div className="accreditation-title">
          <h2>
            Ascencia Malta <br />
            <span>is accredited by:</span>
          </h2>
        </div>

        <div className="accreditation-logos">

          <img src={mqf} alt="mqf"/>
          <img src={elt} alt="elt"/>
          <img src={athe} alt="athe"/>

          <img src={eqf} alt="eqf"/>
          <img src={aacsb} alt="aacsb"/>

          <img src={member} alt="member"/>
          <img src={amte} alt="amte"/>

        </div>

      </div>

    </section>
  );
};

export default AccreditationSection;