import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Users,
  MapPin,
  BarChart3,
  Bell,
  Cloud,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

import "./MobileApplications.css";

function MobileApplications() {
  const capabilities = [
    {
      icon: <Smartphone />,
      title: "Business Mobile Applications",
      text: "Mobile applications that give teams access to important business operations wherever they work.",
    },
    {
      icon: <Users />,
      title: "Field & Team Applications",
      text: "Connect field teams with management through mobile tools for sales, visits, tasks, reporting and operations.",
    },
    {
      icon: <MapPin />,
      title: "Location-Based Operations",
      text: "Support field activities with location-aware features for visits, check-ins, deliveries and service operations.",
    },
    {
      icon: <BarChart3 />,
      title: "Mobile Reporting",
      text: "Give teams the ability to capture operational information while giving management better visibility.",
    },
  ];

  const features = [
    "Android and cross-platform business applications",
    "Integration with existing business systems and APIs",
    "User authentication and role-based access",
    "Real-time data capture and synchronization",
    "Location and field activity features",
    "Notifications and operational alerts",
  ];

  const benefits = [
    {
      icon: <Smartphone />,
      title: "Work Anywhere",
      text: "Keep important business activities accessible beyond the traditional office environment.",
    },
    {
      icon: <RefreshCw />,
      title: "Capture Information Faster",
      text: "Reduce paperwork and delays by allowing teams to capture information directly from the field.",
    },
    {
      icon: <BarChart3 />,
      title: "Improve Visibility",
      text: "Give management better access to operational information and field activity.",
    },
    {
      icon: <Cloud />,
      title: "Connect Operations",
      text: "Bring mobile users into the same digital ecosystem as your wider business systems.",
    },
  ];

  return (
    <main className="mobile-app-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mobile-solution-hero">

        <img
          className="mobile-hero-image"
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=2000&q=85"
          alt="Mobile application development"
        />

        <div className="mobile-hero-overlay"></div>

        <div className="container">

          <div className="mobile-hero-content">

            <Link
              to="/#solutions"
              className="mobile-back-link hero-back-link"
            >
              <ArrowLeft size={17} />
              Back to Solutions
            </Link>

            <span className="mobile-eyebrow">
              MOBILE APPLICATIONS
            </span>

            <h1>
              Mobile technology that
              <span> keeps business moving.</span>
            </h1>

            <p>
              We build practical mobile applications that connect your
              people, customers and business operations wherever work
              happens.
            </p>

            <div className="mobile-hero-actions">

              <Link
                to="/contact"
                className="mobile-primary-button"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <a
                href="#mobile-capabilities"
                className="mobile-secondary-button"
              >
                Explore Our Services
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="mobile-intro">

        <div className="container">

          <div className="mobile-intro-grid">

            <div className="mobile-intro-image">

              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85"
                alt="Mobile business application"
              />

              <div className="mobile-image-badge">
                <Smartphone size={20} />
                <span>Connected Business</span>
              </div>

            </div>


            <div className="mobile-intro-content">

              <span className="mobile-section-label">
                THE SOLUTION
              </span>

              <h2>
                Put your business
                <span> in your team's hands.</span>
              </h2>

              <p>
                Businesses increasingly operate beyond the office.
                Sales teams visit customers, field teams collect
                information, technicians handle jobs and managers need
                visibility into activities as they happen.
              </p>

              <p>
                We build mobile applications that bring those operations
                closer to your people. Our applications can connect with
                existing systems, capture information in the field and
                help teams work more efficiently from anywhere.
              </p>

              <div className="mobile-intro-points">

                <div>
                  <CheckCircle2 />
                  <span>Designed around your workflows</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Connected to your existing systems</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Built for real operational environments</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        className="mobile-capabilities"
        id="mobile-capabilities"
      >

        <div className="container">

          <div className="mobile-heading">

            <div>

              <span className="mobile-eyebrow-dark">
                WHAT WE BUILD
              </span>

              <h2>
                Mobile solutions for
                <span> real-world operations.</span>
              </h2>

            </div>

            <p>
              We focus on applications that solve practical business
              problems and make information available where it is needed.
            </p>

          </div>


          <div className="mobile-capabilities-list">

            {capabilities.map((item) => (

              <article
                className="mobile-capability-card"
                key={item.title}
              >

                <div className="mobile-capability-icon">
                  {item.icon}
                </div>

                <div className="mobile-capability-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <ArrowRight className="mobile-card-arrow" />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FIELD OPERATIONS
      ===================================================== */}

      <section className="fieldops-section">

        <div className="container">

          <div className="fieldops-grid">

            <div className="fieldops-image">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
                alt="Business field operations"
              />

              <div className="fieldops-image-overlay"></div>

              <div className="fieldops-badge">
                <span>BUSINESS APPLICATION</span>
                <strong>FIELD OPERATIONS</strong>
              </div>

            </div>


            <div className="fieldops-content">

              <span className="mobile-eyebrow-dark">
                MOBILE BUSINESS SOLUTIONS
              </span>

              <h2>
                Field operations,
                <span> connected.</span>
              </h2>

              <p>
                Mobile technology can transform field operations by
                putting essential business tools directly in the hands
                of teams working away from the office.
              </p>

              <p>
                Instead of relying entirely on paperwork, phone calls
                or disconnected processes, teams can use a centralized
                mobile platform to manage activities while management
                gains better visibility of what is happening on the
                ground.
              </p>

              <div className="fieldops-features">

                <div>
                  <CheckCircle2 />
                  <span>Customer and field visit management</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Sales and activity management</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Location-aware field activities</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Team activity visibility</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="mobile-features-section">

        <div className="container">

          <div className="mobile-features-grid">

            <div className="mobile-features-content">

              <span className="mobile-eyebrow-dark">
                DESIGNED FOR BUSINESS
              </span>

              <h2>
                More than an app.
                <span> A connected business tool.</span>
              </h2>

              <p>
                A business application should work as part of your wider
                operation. We design mobile solutions with the data,
                workflows and people behind the application in mind.
              </p>


              <div className="mobile-features-list">

                {features.map((feature) => (

                  <div
                    className="mobile-feature-item"
                    key={feature}
                  >
                    <CheckCircle2 />
                    <span>{feature}</span>
                  </div>

                ))}

              </div>

            </div>


            {/* PHONE VISUAL */}

            <div className="mobile-feature-visual">

              <div className="mobile-phone-frame">

                <div className="phone-speaker"></div>

                <div className="phone-screen">

                  <div className="phone-screen-top">
                    <span>IMMORTRIX</span>
                    <Bell size={16} />
                  </div>

                  <div className="phone-welcome">
                    <small>BUSINESS OPERATIONS</small>
                    <strong>Everything you need.</strong>
                  </div>

                  <div className="phone-card-grid">

                    <div>
                      <Smartphone />
                      <span>Activities</span>
                    </div>

                    <div>
                      <Users />
                      <span>Customers</span>
                    </div>

                    <div>
                      <MapPin />
                      <span>Visits</span>
                    </div>

                    <div>
                      <BarChart3 />
                      <span>Reports</span>
                    </div>

                  </div>

                  <div className="phone-bottom-card">

                    <Cloud />

                    <div>
                      <strong>Connected</strong>
                      <span>Business data synchronized</span>
                    </div>

                  </div>

                  <div className="phone-security">

                    <ShieldCheck />

                    <span>
                      Secure business access
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="mobile-benefits">

        <div className="container">

          <div className="mobile-benefits-header">

            <span className="mobile-eyebrow-dark">
              BUSINESS IMPACT
            </span>

            <h2>
              Give your teams the tools
              <span> to work smarter.</span>
            </h2>

            <p>
              The right mobile solution can improve how information
              moves between your teams, customers and wider business
              systems.
            </p>

          </div>


          <div className="mobile-benefits-grid">

            {benefits.map((benefit) => (

              <article
                className="mobile-benefit-card"
                key={benefit.title}
              >

                <div className="mobile-benefit-icon">
                  {benefit.icon}
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="mobile-cta">

        <div className="container">

          <div className="mobile-cta-inner">

            <div>

              <span>
                HAVE A MOBILE PROJECT IN MIND?
              </span>

              <h2>
                Let's build a mobile solution
                <strong> around your operation.</strong>
              </h2>

              <p>
                Tell us what your teams need and let's explore how
                mobile technology can improve the way your business works.
              </p>

            </div>

            <Link
              to="/contact"
              className="mobile-cta-button"
            >
              Start a Conversation
              <ArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK TO SOLUTIONS
      ===================================================== */}

      <section className="mobile-bottom-navigation">

        <div className="container">

          <Link
            to="/#solutions"
            className="mobile-back-link"
          >
            <ArrowLeft size={18} />
            Back to All Solutions
          </Link>

        </div>

      </section>

    </main>
  );
}

export default MobileApplications;