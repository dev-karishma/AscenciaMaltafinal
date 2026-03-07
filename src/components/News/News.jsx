
import martina from "../../assets/Images/martina.jpg"
import EFMD from "../../assets/Images/EFMD.jpg"
import Icef from "../../assets/Images/Icef.jpg"
import "./News.css"

const News = () => {

  const articles = [
    {
      img: martina,
      date: "02/02/2026",
      title: "World Cancer Day – Cancer Awareness at Ascencia Malta 💜",
      text: "Ascencia Malta February 2026, A new national benchmark has been achieved."	
    },
    {
      img: EFMD,
      date: "02/02/2026",
      title: "A New National Benchmark and Historic Achievement 🎉",
      text: "Ascencia Malta sets new standards in quality education recognition."
    },
    {
      img: Icef,
      date: "20/09/2025",
      title: "Ascencia Malta to Present at ICEF Rio de Janeiro — Showcasing Malta as a Premier Study Destination",
      text: "Highlighting Malta as an ideal international study destination at ICEF."
    }
  ];

  return (
    <>
    
      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <span className="sec-label">NEWS</span>
            <h2 className="news-title">Discover our news & events</h2>
          </div>

          <div className="news-grid">
            {articles.map((a,i)=>(
              <div key={i} className="news-card">
                <img
                  src={a.img}
                  alt={a.title}
                  className="news-card-img"
                />
                <div className="news-card-body">
                  <div className="news-card-date">{a.date}</div>
                  <div className="news-card-title">{a.title}</div>
                  {a.text && <div className="news-card-text">{a.text}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="news-load-more">
            <button className="btn-outline-dark">SEE MORE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;