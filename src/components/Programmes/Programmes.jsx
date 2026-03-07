
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Programmes = () => {

  const [current, setCurrent] = useState(0);

  const items = [
    { label: "COURSES", title: "POSTGRADUATE\nPROGRAMMES" },
    { label: "COURSES", title: "MBA DEGREES" },
    { label: "COURSES", title: "DBA DEGREES" },
    { label: "COURSES", title: "MASTERS DEGREES" },
    { label: "COURSES", title: "BACHELOR DEGREES" },
    { label: "COURSES", title: "DIPLOMA PROGRAMMES" },
    { label: "COURSES", title: "AWARD CERTIFICATES" },
  ];

  const visibleCards = 4;

  const next = () => {
    if (current < items.length - visibleCards) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <style>{`

      .prog-section{
        padding:80px 0;
        background:#fff;
      }

      .container{
        width:90%;
        margin:auto;
        position:relative;
      }

      .prog-heading{
        font-size:40px;
        font-weight:900;
        margin-bottom:10px;
      }

      .prog-sub{
        color:#666;
        max-width:850px;
        margin-bottom:50px;
      }

      .prog-carousel{
        position:relative;
        overflow:hidden;
      }

      .prog-track{
        display:flex;
        gap:20px;
        transition:transform 0.5s ease;
        transform:translateX(calc(-${current} * 260px));
      }

      .prog-card{
        min-width:240px;
        background:#f5f5f5;
        border-radius:16px;
        padding:30px 25px;
        transition:0.3s;
      }

      .prog-card:hover{
        transform:translateY(-6px);
        box-shadow:0 10px 30px rgba(0,0,0,0.1);
      }

      .prog-card.highlight{
        background:#f9e4e1;
      }

      .prog-card-label{
        font-size:10px;
        letter-spacing:3px;
        font-weight:700;
        color:#c0392b;
      }

      .prog-card-title{
        font-size:18px;
        font-weight:900;
        margin-top:10px;
        white-space:pre-line;
      }

      .prog-card-play{
        margin-top:20px;
      }

      .play-btn{
        width:50px;
        height:50px;
        border:none;
        border-radius:12px;
        background:#c0392b;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      }

      .prog-arrow{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:45px;
        height:45px;
        border-radius:50%;
        border:1px solid #ddd;
        background:#fff;
        cursor:pointer;
        z-index:10;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:22px;
      }

      .prog-arrow.left{
        left:-20px;
      }

      .prog-arrow.right{
        right:-20px;
      }

      .prog-arrow:hover{
        background:#c0392b;
        color:#fff;
      }

      /* ---------------- MOBILE ---------------- */

      @media(max-width:768px){

        .prog-heading{
          font-size:28px;
        }

        .prog-sub{
          font-size:14px;
        }

        .prog-card{
          min-width:200px;
          padding:20px;
        }

        .prog-track{
          transform:translateX(calc(-${current} * 220px));
        }

        .prog-arrow{
          width:35px;
          height:35px;
          font-size:18px;
        }

      }

      /* ---------------- SMALL MOBILE ---------------- */

      @media(max-width:480px){

        .prog-card{
          min-width:170px;
        }

        .prog-track{
          transform:translateX(calc(-${current} * 190px));
        }

      }

      `}</style>

      <section className="prog-section">

        <div className="container">

          <h2 className="prog-heading">
            Find the best programme for yourself
          </h2>

          <p className="prog-sub">
            Because each training course corresponds to a personal ambition,
            all our students receive individual attention.
          </p>

          <div className="prog-carousel">

            <button 
              className="prog-arrow left"
              onMouseEnter={prev}
            >
              ‹
            </button>

            <div className="prog-track">

              {items.map((item, i) => (
                <div key={i} className={`prog-card ${i === 2 ? "highlight" : ""}`}>

                  <div className="prog-card-label">
                    {item.label}
                  </div>

                  <div className="prog-card-title">
                    {item.title}
                  </div>

                  <div className="prog-card-play">
                    <button className="play-btn">
                      <FaPlay/>
                    </button>
                  </div>

                </div>
              ))}

            </div>

            <button 
              className="prog-arrow right"
              onMouseEnter={next}
            >
              ›
            </button>

          </div>

        </div>

      </section>
    </>
  );
};

export default Programmes;