import { useState, useEffect } from "react";
import "./HomePage.css"
const progs = [
  { icon: "🎓", label: "Courses", name: "Postgraduate Programmes" },
  { icon: "💼", label: "Courses", name: "MBA Degrees" },
  { icon: "📚", label: "Courses", name: "DBA Degrees" },
  { icon: "🔬", label: "Courses", name: "Masters Degrees" },
  { icon: "🏛️", label: "Courses", name: "Bachelor Degrees" },
  { icon: "📜", label: "Courses", name: "Diploma Programmes" },
  { icon: "🏆", label: "Courses", name: "Award Certificates" },
];

const whyItems = [
  { icon: "🏛️", label: "History" },
  { icon: "🏗️", label: "Architecture" },
  { icon: "🌿", label: "Public Gardens" },
  { icon: "🎵", label: "Music Festivals" },
  { icon: "✨", label: "Authenticity" },
  { icon: "🌍", label: "Mediterranean Life" },
];

const newsData = [
  { thumb: "thumb-red", emoji: "💜", date: "02/02/2026", title: "World Cancer Day – Cancer Awareness at Ascencia Malta" },
  { thumb: "thumb-dark", emoji: "🎉", date: "02/02/2026", title: "A New National Benchmark and Historic Achievement" },
  { thumb: "thumb-blue", emoji: "✈️", date: "20/09/2025", title: "Ascencia Malta to Present at ICEF Rio de Janeiro" },
];

export default function App() {
  const [dot, setDot] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDot(d => (d + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo-box">
          <div className="logo-wrapper">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M4 30 Q8 20 18 10 Q26 4 32 2 Q28 12 20 20 Q12 28 4 30Z" fill="#c0392b"/>
              <path d="M8 32 Q12 24 20 16 Q26 10 30 8 Q26 18 18 24 Q12 30 8 32Z" fill="#c0392b" opacity="0.45"/>
            </svg>
            <div className="logo-text-block">
              <span className="logo-ascencia">ASCENCIA</span>
              <span className="logo-malta">MALTA</span>
            </div>
          </div>
        </div>

        <div className="navbar-links-box">
          {["ASCENCIA MALTA","PROGRAMMES","ENGLISH SCHOOL","LIVING IN MALTA","QUALITY ASSURANCE","FEES","EVENTS"].map((l,i) => (
            <div key={i} className="nav-link">{l}</div>
          ))}
          <button className="nav-hamburger">
            <div className="hamburger-lines"><span/><span/><span/></div>
          </button>
        </div>

        <div className="navbar-contact-box">
          <span>CONTACT US</span>
        </div>
      </nav>

      {/* HERO */}
      {/* <section className="hero">
        <div className="hero-bg"/>
        <div className="hero-dotpattern"/>
        <div className="hero-content">
          <span className="hero-eyebrow">WE ARE EAGER TO GIVE YOU THE BEST EDUCATION</span>
          <h1 className="hero-title">WELCOME TO<br/>ASCENCIA MALTA</h1>
          <button className="hero-btn">
            <span className="hero-btn-label">DISCOVER OUR COURSES</span>
            <div className="hero-btn-play">
              <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
            </div>
          </button>
        </div>
        <div className="hero-indicator">
          {[0,1,2].map(i => <div key={i} className={`dot-ind${dot===i?" on":""}`} onClick={()=>setDot(i)}/>)}
        </div>
      </section> */}

      {/* PROGRAMMES */}
      <section className="sec" style={{background:"#fff"}}>
        <div className="sec-head center" style={{textAlign:"center",marginBottom:56}}>
          <div className="red-bar center"/>
          <h2 className="sec-title">Find the Best Programme for Yourself</h2>
          <p className="sec-desc center">Because each training course corresponds to a personal ambition, all our students receive individual attention. The success of each student is our priority.</p>
        </div>
        <div className="cards-grid">
          {progs.map((p,i) => (
            <div key={i} className="prog-card">
              <div className="prog-icon">{p.icon}</div>
              <div className="prog-label">{p.label}</div>
              <div className="prog-name">{p.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec" style={{background:"#f5f5f5"}}>
        <div className="about-grid">
          <div className="about-text">
            <div className="red-bar"/>
            <h2>About <span>Ascencia</span> Malta</h2>
            <p>Ascencia Malta is located in Floriana – right on the doorstep of Valletta. Floriana was meant to be a suburb of Valletta, but it developed to be a town on its own. A short walk separates the two towns.</p>
            <p>Floriana sits in the very heart of the Maltese islands, with roads leading to all the bustling and major cities in Malta, so all roads lead to Floriana.</p>
            <button className="btn-red">READ MORE</button>
          </div>
          <div className="about-img">
            <span className="about-img-emoji">🌊</span>
            <div className="about-img-footer">FLORIANA, MALTA</div>
          </div>
        </div>
      </section>

      {/* WHY FLORIANA */}
      <section className="sec why-bg">
        <div style={{textAlign:"center",marginBottom:52}}>
          <div className="red-bar center"/>
          <h2 className="sec-title white">Why Floriana?</h2>
          <p className="sec-desc white center">Because there is a lot more… but you have to discover!</p>
        </div>
        <div className="why-grid">
          {whyItems.map((w,i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{w.icon}</div>
              <div className="why-label">{w.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="sec" style={{background:"#fff"}}>
        <div className="director-grid">
          <div className="director-img">👩‍🎓</div>
          <div>
            <div className="red-bar"/>
            <div className="director-title">Welcome to Ascencia Business School!</div>
            <blockquote className="director-quote">
              "Our mission is to ensure that after completing their studies with us, our students are able to step right into the world of work and excel. I invite you all to join us at the heart of the Mediterranean to start your journey of self-discovery. Your career starts here!"
            </blockquote>
            <div className="dir-name">Dr. Tess Giordmaina</div>
            <div className="dir-role">Director of Ascencia Malta</div>
          </div>
        </div>
      </section>

      {/* CAMPUSES */}
      <section className="sec" style={{background:"#f5f5f5"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <div className="red-bar center"/>
          <h2 className="sec-title">Our Campuses</h2>
          <p className="sec-desc center">Discover Ascencia Business School campuses around the world and their international mobility programs.</p>
        </div>
        <div className="campus-grid">
          {[
            {bg:"paris-bg",emoji:"🗼",city:"Paris Campus",desc:"Ascencia Business School and its international programs are pleased to welcome you on its Paris campus."},
            {bg:"valencia-bg",emoji:"🌞",city:"Valencia Campus",desc:"Ascencia Business School and its international programs are pleased to welcome you on its Valencia campus."},
          ].map((c,i) => (
            <div key={i} className="campus-card">
              <div className={`campus-bg ${c.bg}`}>{c.emoji}</div>
              <div className="campus-overlay"/>
              <div className="campus-info">
                <div className="campus-city">{c.city}</div>
                <div className="campus-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATION */}
      <section className="sec" style={{background:"#fff",textAlign:"center"}}>
        <div className="red-bar center"/>
        <h2 className="sec-title">Ascencia Malta is Accredited By</h2>
        <div className="accred-pills">
          {["MQF","ELT Council","ATHE","EQF","MFHEA","AMTE","Pearson","Edusign","Malta Chamber","Erasmus+"].map((a,i) => (
            <div key={i} className="accred-pill">{a}</div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="sec bg-light">
        <div style={{textAlign:"center",marginBottom:0}}>
          <div className="red-bar center"/>
          <h2 className="sec-title">Discover Our News & Events</h2>
        </div>
        <div className="news-grid">
          {newsData.map((n,i) => (
            <div key={i} className="news-card">
              <div className={`news-thumb ${n.thumb}`}>{n.emoji}</div>
              <div className="news-body">
                <div className="news-date">{n.date}</div>
                <div className="news-title">{n.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:40}}>
          <button className="btn-red">SEE MORE NEWS</button>
        </div>
      </section>

      {/* CTA */}
      <section className="sec cta-bg">
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div className="red-bar center"/>
          <h2 className="sec-title" style={{color:"#fff",textAlign:"center"}}>JOIN US!</h2>
          <p className="sec-desc" style={{color:"rgba(255,255,255,0.65)",textAlign:"center",margin:"0 auto 36px"}}>
            You wish to join the Ascencia Business School community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!
          </p>
          <div style={{textAlign:"center"}}>
            <button className="btn-red">GET IN TOUCH</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="foot-grid">
          <div>
            <div className="foot-brand-name">ASCENCIA</div>
            <div className="foot-brand-sub">MALTA</div>
            <p className="foot-p">23, Vincenzo Dimech Street,<br/>Floriana, Malta<br/><br/>Licensed by MFHEA · License no. 2021-018<br/>Category: Higher Education Institution</p>
          </div>
          <div className="foot-col">
            <div className="foot-col-title">Courses</div>
            <ul>{["DBA","MBA","Masters","Bachelor","Diploma","Award Certificates"].map(c=><li key={c}>{c}</li>)}</ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-title">English School</div>
            <ul>{["General English","Business English","Academic English","ESP Course"].map(c=><li key={c}>{c}</li>)}</ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-title">Living in Malta</div>
            <ul>{["Study in Malta","Jobs in Malta","Visa Requirements","Quality Assurance","Events"].map(c=><li key={c}>{c}</li>)}</ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="foot-copy">© 2025 Ascencia Malta | Terms & Conditions | Privacy Policy</div>
          <div className="socials">
            {["f","in","ig","yt"].map((s,i)=><div key={i} className="soc-btn">{s}</div>)}
          </div>
        </div>
      </footer>
    </>
  );
}
