import "./Footer.css"
const Footer = () => (
  <>
   
   <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <div className="footer-col-title">Ascencia Malta Ltd</div>
            <div className="footer-red-line"/>
            <p className="footer-p">
              23, Vincenzo Dimech Street, Floriana, Malta<br/>
              <span className="red-link">Contact us</span>
              <br/><br/>
              Erasmus + mobility :<br/>
              <span style={{color:"rgba(255,255,255,0.6)"}}>erasmus@ascenciamalta.mt</span>
            </p>
          </div>
          {/* Col 2 */}
          <div>
            <div className="footer-col-title">Courses</div>
            <div className="footer-red-line"/>
            <ul className="footer-ul">
              {["Doctorate of Business Administration (DBA)","Masters of Business Administration (MBA) in Leadership Excellence","Master of Science Specialization","Master of Arts Specialization","Post Graduate Diploma – Computer Science Specialization","Post Graduate Diploma Specialization","Bachelor Specialization","Undergraduate Diploma Specialization","Award certificates"].map((c,i)=>(
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <div className="footer-col-title">English language courses</div>
            <div className="footer-red-line"/>
            <ul className="footer-ul">
              {["General English Course","Business English Course","Academic English Course","ESP – English For Special Purpose Course"].map((c,i)=>(
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social-row">
          <div className="footer-social-head">Follow Ascencia Malta</div>
          <div className="social-icons">
            {["f","📷","in","🎵","▶"].map((s,i)=>(
              <div key={i} className="social-icon">{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-copy">
              © 2025 Ascencia Malta | Terms & Conditions | Privacy Policy<br/>
              <br/>
              Licensed by: The Malta Further and Higher Education Authority (MFHEA)<br/>
              License number: 2021-018<br/>
              Category: Higher Education Institution
            </div>
            <div className="footer-college">
              <div className="college-badge">
                <span className="college-badge-icon">🏛️</span>
                <div>
                  <div className="college-badge-text">COLLÈGE<br/>DE PARIS</div>
                  <div className="college-badge-sub">Member of Collège de Paris</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);
export default Footer