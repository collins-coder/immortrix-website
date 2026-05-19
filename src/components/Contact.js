import React from "react";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Contact() {

  return (

    <section className="contact-section" id="contact">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}

          <div className="col-lg-5 mb-5 mb-lg-0">

            <div className="section-badge">
              CONTACT US
            </div>

            <h2 className="contact-title">
              Let's Build Your Next Digital Solution
            </h2>

            <p className="contact-text">
              Reach out to Immortrix Technologies for
              websites, business systems, mobile apps,
              automation and IT consultation.
            </p>

            <div className="contact-info">

              <div className="contact-item">

                <div className="contact-icon">
                  <Mail />
                </div>

                <div>
                  <h6>Email</h6>
                  <span>chirchircollins9@gmail.com</span>
                </div>

                <div>
                  <h6>Phone</h6>
                  <span>+254 723453289</span>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <Phone />
                </div>

                

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin />
                </div>

                <div>
                  <h6>Location</h6>
                  <span>Nairobi, Kenya</span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-7">

            <div className="contact-form-card">

              <div className="row">

                <div className="col-md-6 mb-4">

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Full Name"
                  />

                </div>

                <div className="col-md-6 mb-4">

                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Email Address"
                  />

                </div>

              </div>

              <div className="mb-4">

                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Subject"
                />

              </div>

              <div className="mb-4">

                <textarea
                  rows="6"
                  className="form-control custom-input"
                  placeholder="Your Message"
                ></textarea>

              </div>

              <button className="submit-btn">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;