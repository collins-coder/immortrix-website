import React from "react";

function Footer() {

  return (

    <footer className="footer-section">

      <div className="container">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <div className="footer-logo">

              <div className="logo-circle">
                I
              </div>

              <div>
                <h4>IMMORTRIX</h4>
                <span>TECHNOLOGIES</span>
              </div>

            </div>

            <p className="footer-text">
              Modern IT solutions for businesses,
              startups and enterprises.
            </p>

          </div>

          <div className="col-lg-4 mb-4">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#portfolio">Portfolio</a>
              </li>

            </ul>

          </div>

          <div className="col-lg-4 mb-4">

            <h5 className="footer-heading">
              Contact
            </h5>

            <p className="footer-text">
              Nairobi, Kenya
            </p>

            <p className="footer-text">
              info@immortrix.com
            </p>

          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">

          <p>
            © 2026 Immortrix Technologies.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;