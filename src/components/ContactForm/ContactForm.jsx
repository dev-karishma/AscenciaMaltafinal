
import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* <p className="small-title">ASCENCIA MALTA</p> */}
        <h1>CONTACT US</h1>
        <p className="desc">
          For any question related to our campus, our programmes or any other
          subject concerning Ascencia Malta, please fill in the form below.
          Our team will get back to you as soon as possible.
        </p>
<form className="contact-form">
  <div className="row">
    <input type="text" placeholder="First Name*" />
    <input type="text" placeholder="Last Name*" />
  </div>

  <div className="row">
    <input type="email" placeholder="E-mail*" />
    <input type="text" placeholder="Phone*" />
  </div>

  {/* ⭐ SPECIAL GRID ROW */}
  <div className="row row-split">
    <input type="text" placeholder="Subject of your message*" />
    <textarea placeholder="Your message*" />
  </div>

  {/* <div className="checkbox-row">
    <input type="checkbox" id="agree" />
    <label htmlFor="agree">
      I agree that Ascencia Malta collects and uses the personal data I have just entered in this form.
    </label>
  </div> */}

  <button className="submit-btn">SUBMIT</button>
</form>

        {/* ✅ MAP SECTION (down side) */}
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Ascencia%20Malta&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
