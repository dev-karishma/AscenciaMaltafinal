
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"                     
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={10}
      >
        <SwiperSlide>
          <div className="slide slide1">
            <HeroContent />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2">
            <HeroContent />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3">
            <HeroContent />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="hero-text">
      <p>WE ARE EAGER TO GIVE YOU THE BEST EDUCATION</p>
      <h1>
        WELCOME TO <br /> ASCENCIA MALTA
      </h1>

      <button className="joinus-cta">
        <span className="joinus-cta-text">GET IN TOUCH</span>
        <span className="joinus-cta-play">
          <FaPlay size={18} />
        </span>
      </button>
    </div>
  );
}

export default Hero;