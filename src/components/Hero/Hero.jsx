import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import TypeWriter from "../TypeWriter/TypeWriter";
import HeroSlider from "../HeroSlider/HeroSlider";
import ParticleField from "../ParticleField/ParticleField";

import "./Hero.css";

const HERO_PHRASES = [
  "your business.",
  "your people.",
  "your customers.",
  "your workflows.",
  "your growth.",
];

const MARQUEE_ITEMS = [
  "Software Development",
  "Business Systems",
  "Mobile Applications",
  "Business Automation",
  "Digital Transformation",
  "Data & Reporting",
];

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* AUTOMATIC BACKGROUND SLIDER */}
      <HeroSlider />

      {/* DARK / PURPLE OVERLAY */}
      <div className="hero-overlay"></div>

      {/* SUBTLE PURPLE GLOW */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* MOVING PARTICLES */}
      <ParticleField />

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* EYEBROW */}
          <div className="hero-eyebrow">

            <span className="eyebrow-dot"></span>

            Trusted Digital Partner For Modern Businesses

          </div>


          {/* TITLE */}
          <h1 className="hero-title">

            Technology built
            <br />

            <span className="gradient-text">
              around{" "}
              <TypeWriter phrases={HERO_PHRASES} />
            </span>

          </h1>


          {/* DESCRIPTION */}
          <p className="hero-description">

            We design and develop practical digital solutions that
            help businesses simplify operations, automate workflows,
            connect people and systems, and create better ways to grow.

          </p>


          {/* ACTIONS */}
          <div className="hero-actions">

            <a
              href="#contact"
              className="hero-primary-btn btn-shine btn-pulse"
            >
              Start a Project
              <ArrowRight />
            </a>

            <a
              href="#solutions"
              className="hero-secondary-btn btn-shine"
            >
              View Our Solutions
            </a>

          </div>


          {/* TRUST POINTS */}
          <div className="hero-trust">

            <div className="hero-trust-item">
              <CheckCircle2 />
              <span>Business-focused solutions</span>
            </div>

            <div className="hero-trust-item">
              <CheckCircle2 />
              <span>Scalable technology</span>
            </div>

            <div className="hero-trust-item">
              <CheckCircle2 />
              <span>Built around your needs</span>
            </div>

          </div>

        </motion.div>

      </div>


      {/* BOTTOM STRIP: SCROLLING TICKER */}
      <div className="hero-bottom-strip">

        <div className="hero-marquee" aria-hidden="true">

          <div className="hero-marquee-track">

            {[0, 1].map((copy) => (
              <div className="hero-marquee-group" key={copy}>
                {MARQUEE_ITEMS.map((item) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    <i></i>
                  </React.Fragment>
                ))}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;