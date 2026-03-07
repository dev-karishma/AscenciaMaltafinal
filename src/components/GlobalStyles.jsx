


import { useState, useEffect, useRef } from "react";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Open+Sans:wght@300;400;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Montserrat', sans-serif; background: #fff; overflow-x: hidden; color: #1a1a1a; }

    :root {
      --red: #c0392b;
      --red-dark: #96281b;
      --black: #1a1a1a;
      --dark-bg: #2b2b2b;
      --darker-bg: #1e1e1e;
      --gray-bg: #f4f4f4;
      --text-muted: #666;
      --white: #ffffff;
    }

    /* Utility */
    .container { max-width: 1280px; margin: 0 auto; padding: 0 60px; }
    @media(max-width:768px){ .container{ padding: 0 20px; } }
    button { cursor: pointer; font-family: 'Montserrat', sans-serif; }

    /* Red Play Button shared style */
    .play-btn {
      width: 52px; height: 52px; border-radius: 14px;
      background: var(--red); border: none; display: inline-flex;
      align-items: center; justify-content: center; cursor: pointer;
      transition: background 0.2s; flex-shrink: 0;
    }
    .play-btn:hover { background: var(--red-dark); }
    .play-btn svg { width: 18px; height: 18px; fill: #fff; margin-left: 3px; }

    /* Section label */
    .sec-label {
      font-size: 11px; font-weight: 700; letter-spacing: 3px;
      text-transform: uppercase; color: var(--red); margin-bottom: 10px; display: block;
    }
  `}</style>
);

const PlayIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: "#fff", marginLeft: 3 }}>
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

export default GlobalStyles