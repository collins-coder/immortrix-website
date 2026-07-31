import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Workflow,
  Settings2,
  Zap,
  RefreshCw,
  BarChart3,
  FileText,
} from "lucide-react";

import "./BusinessAutomation.css";

function BusinessAutomation() {
  const automationAreas = [
    {
      icon: <Workflow />,
      title: "Workflow Automation",
      text: "We digitize and automate business workflows so tasks move between teams and departments with less manual intervention.",
    },
    {
      icon: <Settings2 />,
      title: "Process Automation",
      text: "We identify repetitive processes and build systems that handle routine activities faster, more consistently and with fewer errors.",
    },
    {
      icon: <Zap />,
      title: "Operational Efficiency",
      text: "We connect people, processes and systems to reduce unnecessary work and give teams better control over daily operations.",
    },
    {
      icon: <RefreshCw />,
      title: "System Integration",
      text: "We connect existing business applications and databases so information can move between systems without unnecessary duplication.",
    },
    {
      icon: <BarChart3 />,
      title: "Automated Reporting",
      text: "We turn recurring reporting processes into automated dashboards and reports that provide timely operational information.",
    },
    {
      icon: <FileText />,
      title: "Digital Document Processes",
      text: "We help businesses reduce paperwork by digitizing approvals, requests, records and other document-driven processes.",
    },
  ];

  const process = [
    "Understand your current processes",
    "Identify repetitive and inefficient activities",
    "Design the right automation workflow",
    "Connect the required systems and data",
    "Develop, test and deploy the solution",
    "Monitor and improve the process over time",
  ];

  return (
    <main className="business-automation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="automation-hero">

        <div className="automation-hero-image"></div>
        <div className="automation-hero-overlay"></div>

        <div className="container">

          <div className="automation-hero-content">

            <Link
              to="/"
              className="automation-back-link"
            >
              <ArrowLeft />
              Back to Home
            </Link>

            <span className="automation-eyebrow">
              BUSINESS AUTOMATION
            </span>

            <h1>
              Business
              <span> Automation Solutions</span>
            </h1>

            <p>
              We help businesses automate repetitive processes,
              connect workflows and reduce the manual work that
              slows operations down.
            </p>

            <div className="automation-hero-actions">

              <Link
                to="/contact"
                className="automation-primary-btn"
              >
                Discuss Your Process
                <ArrowRight />
              </Link>

              <a
                href="#automation-services"
                className="automation-secondary-btn"
              >
                See What We Automate
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="automation-intro">

        <div className="container">

          <div className="automation-intro-grid">

            <div className="automation-intro-heading">

              <span className="section-label">
                WHY AUTOMATION
              </span>

              <h2>
                Make your business
                <span> work smarter.</span>
              </h2>

            </div>

            <div className="automation-intro-text">

              <p>
                As businesses grow, manual processes can become
                increasingly difficult to manage. Repetitive data
                entry, approvals, reporting, communication and
                information transfer can consume valuable time.
              </p>

              <p>
                We design automation solutions around the way
                your business actually works. Rather than forcing
                your operations into a generic system, we study
                the process, identify opportunities and build a
                practical digital workflow around it.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE AUTOMATE
      ===================================================== */}

      <section
        className="automation-services"
        id="automation-services"
      >

        <div className="container">

          <div className="automation-section-header">

            <div>

              <span className="section-label">
                WHAT WE AUTOMATE
              </span>

              <h2>
                Practical automation for
                <span> real business operations.</span>
              </h2>

            </div>

            <p>
              From internal workflows to reporting and system
              integration, we focus on automation that produces
              measurable operational improvements.
            </p>

          </div>


          <div className="automation-grid">

            {automationAreas.map((item) => (

              <article
                className="automation-card"
                key={item.title}
              >

                <div className="automation-card-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="automation-process">

        <div className="container">

          <div className="automation-process-grid">

            <div className="automation-process-content">

              <span className="section-label">
                OUR APPROACH
              </span>

              <h2>
                We automate the process,
                <span> not just the task.</span>
              </h2>

              <p>
                Effective automation starts with understanding
                the complete workflow. We look at how information
                enters your business, how it moves between people
                and systems, where delays occur and where manual
                intervention can be reduced.
              </p>

              <p>
                This allows us to build automation that fits your
                existing operations while leaving room for future
                growth.
              </p>

            </div>


            <div className="automation-process-list">

              {process.map((item) => (

                <div
                  className="automation-process-item"
                  key={item}
                >

                  <p>
                    {item}
                  </p>

                  <CheckCircle2 />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

      <section className="automation-use-cases">

        <div className="container">

          <div className="use-cases-header">

            <span className="section-label">
              BUSINESS IMPACT
            </span>

            <h2>
              Where automation can
              <span> make a difference.</span>
            </h2>

          </div>


          <div className="use-cases-grid">

            <div className="use-case">
              <h3>
                Sales Operations
              </h3>

              <p>
                Automate order workflows, approvals, notifications,
                customer updates and sales-related processes.
              </p>
            </div>


            <div className="use-case">
              <h3>
                Finance & Administration
              </h3>

              <p>
                Reduce repetitive administrative work through
                automated requests, approvals, records and reports.
              </p>
            </div>


            <div className="use-case">
              <h3>
                Field Operations
              </h3>

              <p>
                Connect field teams with office operations through
                digital workflows, mobile systems and real-time updates.
              </p>
            </div>


            <div className="use-case">
              <h3>
                Management Reporting
              </h3>

              <p>
                Replace repetitive manual reporting with automated
                dashboards and timely business information.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="automation-cta">

        <div className="container">

          <div className="automation-cta-inner">

            <div>

              <span className="section-label">
                READY TO IMPROVE YOUR WORKFLOW?
              </span>

              <h2>
                Let's find what your
                <span> business can automate.</span>
              </h2>

              <p>
                Tell us how your business currently operates and
                we'll help identify where technology can remove
                unnecessary manual work.
              </p>

            </div>

            <Link
              to="/contact"
              className="automation-cta-btn"
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

      <section className="automation-back-section">

        <div className="container">

          <Link
            to="/"
            className="automation-back-bottom"
          >
            <ArrowLeft />
            Back to Home
          </Link>

        </div>

      </section>

    </main>
  );
}

export default BusinessAutomation;