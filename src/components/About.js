import React from "react";
import {
  Briefcase,
  Rocket,
  Users,
  Cpu
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6 mb-5 mb-lg-0">

            <div className="section-badge">
              ABOUT IMMORTRIX
            </div>

            <h2 className="about-title">
              Building Smart Digital Solutions
              For Modern Businesses
            </h2>

            <p className="about-text">
              Immortrix Technologies is a modern IT solutions company
              focused on helping businesses grow through technology,
              automation and scalable systems.
            </p>

            <p className="about-text">
              We specialize in website development,
              enterprise applications, mobile systems
              and IT consultation
              for businesses looking to scale efficiently.
            </p>

            {/* STATS */}
            <div className="about-stats">

              <div className="about-stat-box">
                <h3>10+</h3>
                <span>Projects</span>
              </div>

              <div className="about-stat-box">
                <h3>24/7</h3>
                <span>Support</span>
              </div>

              <div className="about-stat-box">
                <h3>100%</h3>
                <span>Scalable</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">

            <div className="row">

              <div className="col-md-6 mb-4">

                <div className="about-feature-card">

                  <div className="about-feature-icon">
                    <Rocket />
                  </div>

                  <h5>Innovation</h5>

                  <p>
                    Modern solutions designed for future-ready businesses.
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="about-feature-card">

                  <div className="about-feature-icon">
                    <Cpu />
                  </div>

                  <h5>Automation</h5>

                  <p>
                    Smart systems that improve operational efficiency.
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="about-feature-card">

                  <div className="about-feature-icon">
                    <Users />
                  </div>

                  <h5>Client Focus</h5>

                  <p>
                    Tailored digital services built around business needs.
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="about-feature-card">

                  <div className="about-feature-icon">
                    <Briefcase />
                  </div>

                  <h5>Professionalism</h5>

                  <p>
                    Reliable support and enterprise-level solution delivery.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;