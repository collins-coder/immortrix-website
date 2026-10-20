import React, { useEffect, useState } from "react";

import "./HeroSlider.css";

/*
  To use your own photos: put them in /public/hero/ and add entries like
    { type: "image", src: "/hero/office.jpg" }
*/

const SLIDES = [
  {
    type: "image",
    // Paste the same image URL your hero currently uses here
    src: "PASTE_YOUR_CURRENT_HERO_IMAGE_URL",
  },
  { type: "grid" },
  { type: "mesh" },
];

const INTERVAL = 7000; // milliseconds per slide

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider" aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide hero-slide-${slide.type} ${
            i === active ? "is-active" : ""
          }`}
          style={
            slide.type === "image"
              ? { backgroundImage: `url("${slide.src}")` }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default HeroSlider;