import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const goToSection = (section) => {
    window.location.href = `/#${section}`;
  };

  return (
    <>
      <footer className="footer-section">

        <div className="footer-container">

          {/* ================= TOP ================= */}

          <div className="footer-top">

            {/* BRAND */}

            <div className="footer-brand">

              <Link to="/" className="footer-logo">
                <img
                  src="/logo.jpg"
                  alt="Immortrix Technologies Limited"
                />
              </Link>

              <p className="footer-description">
                We build practical digital solutions that help modern
                businesses work smarter, operate efficiently and grow.
              </p>

              <div className="footer-socials">

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="footer-social"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="footer-social"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://wa.me/254723453289"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="footer-social"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>


            {/* ================= EXPLORE ================= */}

            <div className="footer-column">

              <h4>Explore</h4>

              <ul>

                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    About Us
                  </Link>
                </li>

                <li>
                  <a
                    href="/#solutions"
                    onClick={() => goToSection("solutions")}
                  >
                    Solutions
                  </a>
                </li>

                <li>
                  <Link to="/insights">
                    Insights
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================= SOLUTIONS ================= */}

            <div className="footer-column">

              <h4>Solutions</h4>

              <ul>

                <li>
                  <Link to="/solutions/custom-software">
                    Custom Software
                  </Link>
                </li>

                <li>
                  <Link to="/solutions/mobile-applications">
                    Mobile Applications
                  </Link>
                </li>

                <li>
                  <Link to="/solutions/erp-business-systems">
                    ERP & Business Systems
                  </Link>
                </li>

                <li>
                  <Link to="/solutions/business-automation">
                    Business Automation
                  </Link>
                </li>

                <li>
                  <Link to="/solutions/data-reporting-bi">
                    Data, Reporting & BI
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================= CONTACT ================= */}

            <div className="footer-column footer-contact">

              <h4>Let's Talk</h4>

              <p className="footer-contact-intro">
                Have a project, idea or business challenge?
                Let's discuss how technology can help.
              </p>

              <a
                href="mailto:immortrixtechnologies@gmail.com"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail />
                </span>

                <span>
                  immortrixtechnologies@gmail.com
                </span>
              </a>

              <a
                href="tel:+254723453289"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Phone />
                </span>

                <span>
                  +254 723 453 289
                  <br />
                  +254 715 175 279
                </span>
              </a>

              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  <MapPin />
                </span>

                <span>
                  Nairobi, Kenya
                </span>

              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}

          <div className="footer-cta">

            <div>

              <span className="footer-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's build something
                <span> meaningful.</span>
              </h3>

            </div>

            <Link
              to="/contact"
              className="footer-cta-button"
            >
              Start a Conversation
              <ArrowUpRight />
            </Link>

          </div>


          {/* ================= BOTTOM ================= */}

          <div className="footer-bottom">

            <p>
              © {currentYear} Immortrix Technologies Limited.
              All rights reserved.
            </p>

            <div className="footer-bottom-links">

              <a href="/">
                Privacy
              </a>

              <span></span>

              <a href="/">
                Terms
              </a>

            </div>

            <p className="footer-location">
              Trusted Digital Partner For Modern Businesses.
            </p>

          </div>

        </div>

      </footer>


      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/254723453289?text=Hello%20Immortrix%20Technologies%20Limited%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with Immortrix Technologies on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </>
  );
}

export default Footer;