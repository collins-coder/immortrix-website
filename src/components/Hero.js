import React from "react";

import { motion } from "framer-motion";

import {
  Globe,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

function Hero() {

  return (

    <section
      className="hero-section"
      id="home"
    >

      {/* BACKGROUND OVERLAY */}

      <div className="hero-overlay"></div>

      {/* BLUR LIGHTS */}

      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <div className="container hero-container">

        <div className="row align-items-center min-vh-100">

          {/* ================= LEFT CONTENT ================= */}

          <div className="col-lg-6">

            <motion.div
              className="hero-left"
              initial={{
                opacity: 0,
                y: 60
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8
              }}
            >

              {/* BADGE */}

              <div className="hero-badge">

                <CheckCircle2 />

                <span>
                  Trusted Digital Partner For Modern Businesses
                </span>

              </div>

              {/* TITLE */}

              <h1 className="hero-title">

                We Create
                <br />

                <span className="gradient-text">
                  Powerful Digital
                </span>

                <br />

                Experiences That
                <br />

                Help Businesses
                <br />

                Grow Faster

              </h1>

              {/* DESCRIPTION */}

              <p className="hero-text">

                Immortrix Technologies delivers
                modern websites, enterprise systems,
                mobile applications, business automation
                and scalable IT solutions designed
                to transform operations and drive growth.

              </p>

              {/* FEATURE LIST */}

              <div className="hero-features">

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>
                    Custom Web Platforms
                  </span>

                </div>

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>
                    Business Automation Solutions
                  </span>

                </div>

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>
                    Modern Mobile Applications
                  </span>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="hero-buttons">

                <a
                  href="#contact"
                  className="hero-btn-primary"
                >

                  Start Project

                  <ArrowRight />

                </a>

                <a
                  href="#services"
                  className="hero-btn-secondary"
                >

                  Explore Services

                </a>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div className="col-lg-6">

            <motion.div
              className="hero-visual-container"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1
              }}
            >

              {/* ORBIT */}

              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>

              {/* MAIN CIRCLE */}

              <div className="hero-main-glow">

                <div className="hero-circle-content">

                  <span className="hero-small-text">
                    
                  </span>

                  <h2>
                    IMMORTRIX
                  </h2>

                  <p>
                    Digital Innovation
                  </p>

                </div>

              </div>

              {/* FLOATING CARD 1 */}

              <motion.div
                className="floating-card card-1"
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >

                <div className="floating-icon">

                  <Globe />

                </div>

                <div>

                  <strong>
                    Web Development
                  </strong>

                  <p>
                    Responsive business websites
                  </p>

                </div>

              </motion.div>

              {/* FLOATING CARD 2 */}

              <motion.div
                className="floating-card card-2"
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
              >

                <div className="floating-icon">

                  <Database />

                </div>

                <div>

                  <strong>
                    Enterprise Systems
                  </strong>

                  <p>
                    ERP & workflow automation
                  </p>

                </div>

              </motion.div>

              {/* FLOATING CARD 3 */}

              <motion.div
                className="floating-card card-3"
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
              >

                <div className="floating-icon">

                  <Smartphone />

                </div>

                <div>

                  <strong>
                    Mobile Applications
                  </strong>

                  <p>
                    Android business solutions
                  </p>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;