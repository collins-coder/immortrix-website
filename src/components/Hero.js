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

    <section className="hero-section" id="home">

      {/* OVERLAY */}

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* ================= LEFT ================= */}

          <div className="col-lg-6">

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* BADGE */}

              <div className="hero-badge">

                Trusted Digital Partner For Modern Businesses

              </div>

              {/* TITLE */}

              <h1 className="hero-title">

                We Create
                <span className="gradient-text">
                  {" "}Powerful Digital Experiences
                </span>
                {" "}That Help Businesses Grow Faster

              </h1>

              {/* TEXT */}

              <p className="hero-text">

                Immortrix Technologies delivers modern websites,
                enterprise systems, mobile applications,
                business automation and scalable IT solutions
                designed to transform operations and drive growth.

              </p>

              {/* FEATURES */}

              <div className="hero-features">

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>Custom Web Platforms</span>

                </div>

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>Business Automation Solutions</span>

                </div>

                <div className="hero-feature-item">

                  <CheckCircle2 />

                  <span>Modern Mobile Applications</span>

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

              {/* STATS */}

              <div className="hero-stats">

                <div className="stat-card">

                  <h3>Modern</h3>

                  <p>Digital Solutions</p>

                </div>

                <div className="stat-card">

                  <h3>24/7</h3>

                  <p>Technical Support</p>

                </div>

                <div className="stat-card">

                  <h3>Smart</h3>

                  <p>Business Automation</p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="col-lg-6">

            <motion.div
              className="hero-visual-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >

              {/* MAIN GLOW */}

              <div className="hero-main-glow">

                <div className="hero-circle-content">

                  <span className="hero-small-text">
                    FUTURE READY
                  </span>

                  <h2>IMMORTRIX</h2>

                  <p>
                    Digital Innovation
                  </p>

                </div>

              </div>

              {/* CARD 1 */}

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

                  <strong>Web Development</strong>

                  <p>
                    Responsive business websites
                  </p>

                </div>

              </motion.div>

              {/* CARD 2 */}

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

                  <strong>Enterprise Systems</strong>

                  <p>
                    ERP & workflow automation
                  </p>

                </div>

              </motion.div>

              {/* CARD 3 */}

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

                  <strong>Mobile Applications</strong>

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