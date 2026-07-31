import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* BACKGROUND IMAGE */}
      <div className="hero-background"></div>

      {/* DARK / PURPLE OVERLAY */}
      <div className="hero-overlay"></div>

      {/* SUBTLE PURPLE GLOW */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

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

            <span>
              around your business.
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
              className="hero-primary-btn"
            >
              Start a Project
              <ArrowRight />
            </a>

            <a
              href="#solutions"
              className="hero-secondary-btn"
            >
              View Our Solutions
            </a>

          </div>


          {/* TRUST POINTS */}
          <div className="hero-trust">

            <div className="hero-trust-item">

              <CheckCircle2 />

              <span>
                Business-focused solutions
              </span>

            </div>


            <div className="hero-trust-item">

              <CheckCircle2 />

              <span>
                Scalable technology
              </span>

            </div>


            <div className="hero-trust-item">

              <CheckCircle2 />

              <span>
                Built around your needs
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* BOTTOM STRIP */}
      <div className="hero-bottom-strip">

        <div className="hero-bottom-inner">

          <span>
            Software Development
          </span>

          <i></i>

          <span>
            Business Systems
          </span>

          <i></i>

          <span>
            Mobile Applications
          </span>

          <i></i>

          <span>
            Business Automation
          </span>

          <i></i>

          <span>
            Digital Transformation
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;