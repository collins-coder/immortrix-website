import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Immortrix Technologies Limited,

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
    <>
      <Navbar />

      <main className="contact-page">

        {/* ================= HERO ================= */}

        <section className="contact-hero">

          <div className="contact-hero-grid"></div>

          <div className="container">

            <div className="contact-hero-content">

              <div className="contact-label">
                <span></span>
                GET IN TOUCH
              </div>

              <h1>
                Let's turn your
                <span> idea into reality.</span>
              </h1>

              <p>
                Have a project in mind, a business challenge to solve,
                or simply want to explore what technology can do for you?
                Let's talk.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CONTACT CONTENT ================= */}

        <section className="contact-section">

          <div className="contact-container">

            <div className="contact-grid">

              {/* ================= LEFT ================= */}

              <div className="contact-details">

                <div className="contact-detail-intro">

                  <span className="contact-number">
                    
                  </span>

                  <h2>
                    Start a conversation.
                  </h2>

                  <p>
                    Tell us what you're working on and we'll get back
                    to you with the next steps.
                  </p>

                </div>


                {/* EMAIL */}

                <a
                  href="mailto:immortrixtechnologies@gmail.com"
                  className="contact-detail-item"
                >

                  <div className="contact-detail-icon">
                    <Mail />
                  </div>

                  <div>
                    <span>Email us</span>

                    <strong>
                      immortrixtechnologies@gmail.com
                    </strong>
                  </div>

                  <ArrowUpRight className="contact-detail-arrow" />

                </a>


                {/* PHONE */}

                <a
                  href="tel:+254723453289"
                  className="contact-detail-item"
                >

                  <div className="contact-detail-icon">
                    <Phone />
                  </div>

                  <div>
                    <span>Call us</span>

                    <strong>
                      +254 723 453 289 | +254 715 175 279
                    </strong>
                  </div>

                  <ArrowUpRight className="contact-detail-arrow" />

                </a>


                {/* LOCATION */}

                <div className="contact-detail-item">

                  <div className="contact-detail-icon">
                    <MapPin />
                  </div>

                  <div>
                    <span>Based in</span>

                    <strong>
                      Nairobi, Kenya
                    </strong>
                  </div>

                </div>


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/254723453289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-link"
                >

                  Prefer WhatsApp?

                  <span>
                    Chat with us
                    <ArrowUpRight />
                  </span>

                </a>

              </div>


              {/* ================= RIGHT — FORM ================= */}

              <div className="contact-form-wrapper">

                <div className="contact-form-top">

                  <div>

                    <span>
                      
                    </span>

                    <h2>
                      Tell us about your project
                    </h2>

                  </div>

                  <p>
                    We'll use your details only to respond
                    to your enquiry.
                  </p>

                </div>


                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form-row">

                    <div className="contact-field">

                      <label htmlFor="contact-name">
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />

                    </div>


                    <div className="contact-field">

                      <label htmlFor="contact-email">
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What can we help you with?"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your project or requirements..."
                      required
                    />

                  </div>


                  <button
                    type="submit"
                    className="contact-submit"
                  >

                    <span>
                      Send Enquiry
                    </span>

                    <Send />

                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}

export default Contact;