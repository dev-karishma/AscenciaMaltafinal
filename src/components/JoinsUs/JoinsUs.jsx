
import { FaPlay } from "react-icons/fa";
import "./JoinsUs.css";
const JoinUs = () => (
  <>
    <section className="joinus-section">
      <div className="container">
        <div className="joinus-inner">
          <div className="joinus-text">
            <h2>Join us!</h2>
            <p>You wish to join the Ascencia Business School community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!</p>
          </div>
          <button className="joinus-cta">
            <span className="joinus-cta-text">I GET IN TOUCH</span>
            <div className="joinus-cta-play"><FaPlay size={20}/></div>
          </button>
        </div>
      </div>
    </section>
  </>
);

export default JoinUs