import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const whatsappMessage = `Hello Immortrix Technologies,

Name: ${formData.name}

Email: ${formData.email}

Subject: ${formData.subject}

Message:
${formData.message}`;

    const whatsappUrl =
      `https://wa.me/254723453289?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank");

  };

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
                  <span>
                    chirchircollins9@gmail.com
                  </span>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <Phone />
                </div>

                <div>
                  <h6>Phone</h6>
                  <span>
                    +254 723 453 289 or
                    +254 715 175 279
                  </span>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin />
                </div>

                <div>
                  <h6>Location</h6>
                  <span>
                    Nairobi, Kenya
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-7">

            <div className="contact-form-card">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control custom-input"
                      placeholder="Full Name"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control custom-input"
                      placeholder="Email Address"
                      required
                    />

                  </div>

                </div>

                <div className="mb-4">

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="Subject"
                    required
                  />

                </div>

                <div className="mb-4">

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="Your Message"
                    required
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="submit-btn d-flex align-items-center gap-2"
                >

                  <Send size={18} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;