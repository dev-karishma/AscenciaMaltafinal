
import Tess from "../../assets/Images/Tess.jpg"
import "./Director.css"
const Director = () => (
  <>

    <section className="director-section">

      <div className="director-inner">

        {/* TEXT */}

        <div className="director-text">

          <h2>Welcome to Ascencia Business School!</h2>

          <p>
           As the Director of Ascencia Malta Business and English Language School, it is an honour and a pleasure to welcome you dear students and faculty to our beautiful campus in Floriana, Malta. I am honoured to spearhead a school that is built on a solid foundation of academic integrity and excellence paired with an inherent commitment to learn, teach, innovate and champion knowledge and business success. Our academic teams have been tasked with the responsibility of mentoring some of the brightest minds of this generation. Watching our students evolve into trailblazers with achievements in both professional and personal spheres fuels our commitment to offering practical, and business-relevant education. Our mission is to ensure that after completing their studies with us, our students are able to step right into the world of work and excel. We understand that education is a vital tool in helping us discover our paths, and so I invite you all to join us at the heart of the Mediterranean to start your journey of self-discovery. Your career starts here!
           </p>

        </div>

        {/* IMAGE */}

        <div className="director-image-wrapper">

          <div className="director-photo">
            <img src={Tess} alt="Director"/>
          </div>

          <div className="director-sig">

            <div className="director-sig-name">
              Dr. Tess Giordmaina
            </div>

            <div className="director-sig-role">
              Director of Ascencia Malta
            </div>

          </div>

        </div>

      </div>

    </section>
  </>
)

export default Director