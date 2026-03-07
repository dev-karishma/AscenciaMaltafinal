import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import valencia from "../../assets/Images/valencia.jpg"
import campus from "../../assets/Images/campus.jpg"
import "./Campuses.css"
const Campuses = () => {
  const [active, setActive] = useState("VALENCIA");
  const data = {
    PARIS: {
      title: "Paris Campus",
      desc: "Ascencia Business School and its international programs are pleased to welcome you on its Paris campus.",
      img :campus
    },
    VALENCIA: {
      title: "Valencia Campus",
      desc: "Ascencia Business School and its international programs are pleased to welcome you on its Valencia campus",
       img:valencia
    }
  };

  return (
    <>
      <section className="campus-section">
        <div className="campus-inner">
          <div className="campus-left">
            <h2>Our <span>campuses</span></h2>
            <p>Discover Ascencia Business School campuses around the world and their international mobility programs.</p>
            <div className="campus-tabs">
              {["PARIS","VALENCIA"].map(t=>(
                <button key={t} className={`campus-tab${active===t?" active":""}`} onClick={()=>setActive(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="campus-card-display">
              <div className="campus-card-img-placeholder" style={{backgroundImage:`url('${data[active].img}')`}}/>
              <div className="campus-card-body">
                <div className="campus-card-info">
                  <div className="campus-card-title">{data[active].title}</div>
                  <div className="campus-card-desc">{data[active].desc}</div>
                </div>
                <button className="play-btn"><FaPlay/></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campuses
