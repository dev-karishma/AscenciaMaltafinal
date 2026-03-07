import React from "react";
import erasmus from "../../assets/Images/erasmus.png";
import chambermalata from "../../assets/Images/chambermalata.png"
import get from "../../assets/Images/get.png"
import emarange from "../../assets/Images/emarange.png"
import "./Collaboration.css"
function Collaboration() {
  return (
    <section className="collaboration-section">

      <div className="container">

        <h2 className="title">In collaboration with:</h2>

        <div className="logo-row">

          <div className="logo-box">
            <img src={erasmus} alt="Emergement Digital" />
          </div>

          <div className="logo-box">
            <img src={chambermalata} alt="Malta Chamber" />
          </div>

          <div className="logo-box">
            <img src={get} alt="Get Qualified" />
          </div>

          <div className="logo-box">
            <img src={emarange} alt="Erasmus+" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Collaboration;