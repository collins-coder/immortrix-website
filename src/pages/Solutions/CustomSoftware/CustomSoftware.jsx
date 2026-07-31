import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  Workflow,
  Settings,
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";

import "./CustomSoftware.css";

function CustomSoftware() {
  const capabilities = [
    {
      icon: <Code2 />,
      title: "Custom Business Applications",
      text: "Purpose-built software designed around the way your business actually operates.",
    },
    {
      icon: <Workflow />,
      title: "Workflow-Based Systems",
      text: "Digital systems that organize processes, approvals, tasks and day-to-day operations.",
    },
    {
      icon: <Database />,
      title: "Data & System Integration",
      text: "Connect your applications and business data to create a more unified working environment.",
    },
    {
      icon: <Settings />,
      title: "Process-Specific Solutions",
      text: "Software developed to address specific operational challenges instead of forcing your business into a generic system.",
    },
  ];

  const benefits = [
    "Designed around your existing business processes",
    "Scalable as your organization grows",
    "Centralized business information",
    "Improved operational visibility",
    "Reduced manual work and duplication",
    "Flexible features based on your requirements",
  ];

  return (
    <>
      <Navbar />

      <main className="custom-software-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="solution-hero">

          <div className="solution-hero-image"></div>
          <div className="solution-hero-overlay"></div>

          <div className="container">

            <div className="solution-hero-content">

              <Link
                to="/#solutions"
                className="solution-back-link"
              >
                <ArrowLeft />
                Back to Solutions
              </Link>

              <span className="solution-eyebrow">
                CUSTOM SOFTWARE
              </span>

              <h1>
                Custom Software
                <span> Solutions</span>
              </h1>

              <p>
                Software designed around your business, your processes and
                the way your teams work.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="solution-intro">

          <div className="container">

            <div className="solution-intro-grid">

              <div className="solution-intro-heading">

                <span className="section-label">
                  THE SOLUTION
                </span>

                <h2>
                  Software that fits your business,
                  <span> not the other way around.</span>
                </h2>

              </div>

              <div className="solution-intro-content">

                <p>
                  Every business has its own processes, challenges and
                  requirements. Off-the-shelf software may solve part of
                  the problem, but it does not always fit the way your
                  organization operates.
                </p>

                <p>
                  We develop custom software solutions that are designed
                  around your specific business requirements. From internal
                  management platforms to operational systems, we turn
                  business processes into practical digital tools.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section className="solution-capabilities">

          <div className="container">

            <div className="solution-heading">

              <span className="section-label">
                WHAT WE BUILD
              </span>

              <h2>
                Software solutions built around
                <span> real business needs.</span>
              </h2>

              <p>
                We combine business understanding, software development and
                system design to create solutions that support how your
                organization actually works.
              </p>

            </div>


            <div className="capabilities-grid">

              {capabilities.map((item) => (

                <article
                  className="capability-card"
                  key={item.title}
                >

                  <div className="capability-icon">
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
            BUSINESS PROCESS
        ===================================================== */}

        <section className="solution-process">

          <div className="container">

            <div className="solution-process-grid">

              <div className="solution-process-image">

                <div className="process-image-overlay"></div>

                <div className="process-image-caption">

                  <span>
                    IMMORTRIX TECHNOLOGIES
                  </span>

                  <strong>
                    From business requirements
                    <br />
                    to working software.
                  </strong>

                </div>

              </div>


              <div className="solution-process-content">

                <span className="section-label">
                  HOW WE APPROACH IT
                </span>

                <h2>
                  We start with the
                  <span> problem.</span>
                </h2>

                <p>
                  Before writing code, we first understand the business
                  challenge. We look at your existing processes, identify
                  areas that can be improved and determine how technology
                  can provide a practical solution.
                </p>

                <div className="process-list">

                  <div className="process-item">
                    <CheckCircle2 />
                    <p>Understand your requirements</p>
                  </div>

                  <div className="process-item">
                    <CheckCircle2 />
                    <p>Map your workflows and processes</p>
                  </div>

                  <div className="process-item">
                    <CheckCircle2 />
                    <p>Design and develop the solution</p>
                  </div>

                  <div className="process-item">
                    <CheckCircle2 />
                    <p>Test, deploy and continuously improve</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BENEFITS
        ===================================================== */}

        <section className="solution-benefits">

          <div className="container">

            <div className="benefits-header">

              <span className="section-label">
                WHY CUSTOM SOFTWARE
              </span>

              <h2>
                Built for the way
                <span> you work.</span>
              </h2>

            </div>


            <div className="benefits-grid">

              {benefits.map((benefit) => (

                <div
                  className="benefit-item"
                  key={benefit}
                >

                  <CheckCircle2 />

                  <span>
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="solution-cta">

          <div className="container">

            <div className="solution-cta-inner">

              <div>

                <span>
                  HAVE A BUSINESS CHALLENGE?
                </span>

                <h2>
                  Let's build the right
                  <strong> solution for it.</strong>
                </h2>

                <p>
                  Tell us what your business needs and let's explore
                  how custom software can make your operations better.
                </p>

              </div>

              <Link
                to="/contact"
                className="solution-cta-button"
              >
                Start a Conversation
                <ArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default CustomSoftware;