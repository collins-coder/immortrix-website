import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  PieChart,
  LineChart,
  FileBarChart,
  Database,
  TrendingUp,
} from "lucide-react";

import "./DataReportingBI.css";

function DataReportingBI() {
  const services = [
    {
      icon: <BarChart3 />,
      title: "Business Reporting",
      text: "Structured reports that bring important operational information together and make business performance easier to monitor.",
    },
    {
      icon: <PieChart />,
      title: "Interactive Dashboards",
      text: "Clear and interactive dashboards that give management and teams a more visual understanding of important business information.",
    },
    {
      icon: <LineChart />,
      title: "Performance Analysis",
      text: "We help businesses identify trends, patterns and performance indicators that reveal opportunities and areas requiring attention.",
    },
    {
      icon: <FileBarChart />,
      title: "Automated Reporting",
      text: "Reporting workflows that reduce repetitive manual preparation and make consistent business information available when needed.",
    },
  ];

  const process = [
    {
      icon: <Database />,
      title: "Collect",
      text: "Bring relevant information from business processes and systems together.",
    },
    {
      icon: <FileBarChart />,
      title: "Organize",
      text: "Structure information so it can be interpreted consistently and efficiently.",
    },
    {
      icon: <TrendingUp />,
      title: "Analyze",
      text: "Identify trends, performance patterns and important business indicators.",
    },
    {
      icon: <BarChart3 />,
      title: "Act",
      text: "Turn useful insights into better decisions and practical business action.",
    },
  ];

  const benefits = [
    "Clearer visibility into business performance",
    "Faster access to important information",
    "Reduced manual reporting work",
    "Better monitoring of operational performance",
    "Improved decision-making",
    "Insights that support business growth",
  ];

  return (
    <main className="data-bi-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="data-bi-hero">

        <div className="data-bi-hero-image"></div>
        <div className="data-bi-hero-overlay"></div>

        <div className="container">

          <div className="data-bi-hero-content">

            <Link
              to="/"
              className="data-bi-back-link"
            >
              <ArrowLeft size={17} />
              Back to Solutions
            </Link>

            <span className="data-bi-eyebrow">
              DATA, REPORTING & BUSINESS INTELLIGENCE
            </span>

            <h1>
              Turn business data into
              <span> decisions that matter.</span>
            </h1>

            <p>
              We help businesses organize, analyze and present their
              operational data through reporting and business intelligence
              solutions that make important information easier to understand
              and act on.
            </p>

            <div className="data-bi-hero-actions">

              <Link
                to="/contact"
                className="data-bi-primary-button"
              >
                Discuss Your Data Needs
                <ArrowRight size={18} />
              </Link>

              <a
                href="#data-bi-services"
                className="data-bi-secondary-button"
              >
                Explore Our Services
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="data-bi-intro">

        <div className="container">

          <div className="data-bi-intro-grid">

            <div className="data-bi-intro-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
                alt="Business data analytics dashboard"
              />
            </div>

            <div className="data-bi-intro-content">

              <span className="data-bi-section-label">
                THE SOLUTION
              </span>

              <h2>
                Make your business data
                <span> easier to understand.</span>
              </h2>

              <p>
                Businesses generate large amounts of information every day.
                Sales, customers, inventory, finance, operations and other
                processes all produce data that can become valuable when
                properly organized and analyzed.
              </p>

              <p>
                Our data and reporting solutions help transform raw business
                information into clear reports, dashboards and insights that
                support better planning, performance monitoring and
                decision-making.
              </p>

              <Link
                to="/contact"
                className="data-bi-text-link"
              >
                Talk to us about your data
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="data-bi-services"
        id="data-bi-services"
      >

        <div className="container">

          <div className="data-bi-heading">

            <div>

              <span className="data-bi-eyebrow-dark">
                WHAT WE DO
              </span>

              <h2>
                From raw information to
                <span> useful business insight.</span>
              </h2>

            </div>

            <p>
              We build reporting and intelligence solutions around the
              information your business already generates, helping teams
              see what is happening and understand where attention is needed.
            </p>

          </div>


          <div className="data-bi-services-list">

            {services.map((service) => (

              <article
                className="data-bi-service-card"
                key={service.title}
              >

                <div className="data-bi-service-icon">
                  {service.icon}
                </div>

                <div className="data-bi-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

                <ArrowRight className="data-bi-service-arrow" />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL / BUSINESS INTELLIGENCE
      ===================================================== */}

      <section className="data-bi-visual-section">

        <div className="container">

          <div className="data-bi-visual-grid">

            <div className="data-bi-visual-image">

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Business team analyzing information"
              />

              <div className="data-bi-image-caption">
                <span>IMMORTRIX TECHNOLOGIES</span>
                <strong>
                  Information that helps
                  <br />
                  businesses move forward.
                </strong>
              </div>

            </div>

            <div className="data-bi-visual-content">

              <span className="data-bi-eyebrow-dark">
                BUSINESS INTELLIGENCE
              </span>

              <h2>
                Give your teams a clearer
                <span> view of the business.</span>
              </h2>

              <p>
                Good reporting should do more than display numbers.
                It should help people understand performance, identify
                changes and know where action is required.
              </p>

              <p>
                We focus on creating reporting environments that make
                information accessible and useful to the people who
                depend on it.
              </p>

              <div className="data-bi-highlight">

                <BarChart3 />

                <div>
                  <strong>Better visibility.</strong>
                  <span>
                    Better information leads to better business decisions.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="data-bi-process">

        <div className="container">

          <div className="data-bi-process-header">

            <span className="data-bi-eyebrow-dark">
              OUR APPROACH
            </span>

            <h2>
              We help you understand
              <span> what your data is saying.</span>
            </h2>

            <p>
              Effective reporting is not simply about displaying numbers.
              Information needs to be organized around the questions your
              business needs to answer.
            </p>

          </div>


          <div className="data-bi-process-layout">

            <div className="data-bi-process-image">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                alt="Analytics and business reporting"
              />

            </div>


            <div className="data-bi-process-list">

              {process.map((item) => (

                <div
                  className="data-bi-process-item"
                  key={item.title}
                >

                  <div className="data-bi-process-icon">
                    {item.icon}
                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="data-bi-benefits">

        <div className="container">

          <div className="data-bi-benefits-grid">

            <div className="data-bi-benefits-content">

              <span className="data-bi-eyebrow-dark">
                BUSINESS IMPACT
              </span>

              <h2>
                Better information.
                <span> Better decisions.</span>
              </h2>

              <p>
                The right reporting environment gives business leaders
                and teams a clearer view of performance and helps them
                respond to opportunities and challenges faster.
              </p>

            </div>


            <div className="data-bi-check-list">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="data-bi-check-item"
                >

                  <CheckCircle2 />

                  <span>
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="data-bi-cta">

        <div className="container">

          <div className="data-bi-cta-inner">

            <div>

              <span>
                MAKE YOUR DATA WORK HARDER
              </span>

              <h2>
                Ready to get more from
                <strong> your business data?</strong>
              </h2>

              <p>
                Let's discuss the information your business generates
                and how it can become more useful.
              </p>

            </div>

            <Link
              to="/contact"
              className="data-bi-cta-button"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK TO SOLUTIONS
      ===================================================== */}

      <section className="data-bi-bottom-navigation">

        <div className="container">

          <Link
            to="/"
            className="data-bi-back-solutions"
          >
            <ArrowLeft size={17} />
            Back to Solutions
          </Link>

        </div>

      </section>

    </main>
  );
}

export default DataReportingBI;