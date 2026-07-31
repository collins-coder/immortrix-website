import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Settings,
  Database,
  RefreshCw,
  Layers3,
  Workflow,
} from "lucide-react";

import "./ERPBusinessSystems.css";

function ERPBusinessSystems() {
  return (
    <main className="erp-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="erp-hero">

        <div className="erp-hero-image"></div>
        <div className="erp-hero-overlay"></div>

        <div className="container">

          <div className="erp-hero-content">

            <Link
              to="/"
              className="erp-back-link"
            >
              <ArrowLeft size={17} />
              Back to Solutions
            </Link>

            <span className="erp-eyebrow">
              ERP & BUSINESS SYSTEMS
            </span>

            <h1>
              Connected systems for
              <span> better business operations.</span>
            </h1>

            <p>
              We help businesses improve the way their core operations
              are managed through integrated business systems that bring
              information, processes and teams together.
            </p>

            <div className="erp-hero-actions">

              <Link
                to="/contact"
                className="erp-hero-button"
              >
                Discuss Your Business Needs
                <ArrowRight size={18} />
              </Link>

              <a
                href="#erp-services"
                className="erp-hero-secondary"
              >
                Explore the solution
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="erp-intro">

        <div className="container">

          <div className="erp-intro-grid">

            <div className="erp-intro-visual">

              <div className="erp-intro-image"></div>

              <div className="erp-visual-badge">
                <Database size={20} />
                <div>
                  <strong>Connected Operations</strong>
                  <span>Information where it matters</span>
                </div>
              </div>

            </div>


            <div className="erp-intro-content">

              <span className="erp-section-label">
                THE SOLUTION
              </span>

              <h2>
                Bring your business
                <span> operations together.</span>
              </h2>

              <p>
                As businesses grow, managing sales, inventory, finance,
                procurement, customers and other operations across
                disconnected tools can become increasingly difficult.
              </p>

              <p>
                Our ERP and business systems solutions help create a
                connected operational environment where information
                can move between processes and teams more effectively.
              </p>

              <p>
                We focus on practical systems that improve visibility,
                reduce operational friction and give businesses better
                control over the way they operate.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="erp-services"
        id="erp-services"
      >

        <div className="container">

          <div className="erp-heading">

            <div>

              <span className="erp-section-label">
                WHAT WE DO
              </span>

              <h2>
                Systems designed around
                <span> how your business works.</span>
              </h2>

            </div>

            <p>
              From ERP implementation to system integration and
              ongoing improvement, we help businesses create a more
              connected technology environment.
            </p>

          </div>


          <div className="erp-services-list">

            <article className="erp-service-row">

              <div className="erp-service-image erp-image-implementation"></div>

              <div className="erp-service-content">

                <div className="erp-service-icon">
                  <Layers3 />
                </div>

                <span className="erp-service-tag">
                  ERP IMPLEMENTATION
                </span>

                <h3>
                  Centralize the systems that
                  <span> run your business.</span>
                </h3>

                <p>
                  We support businesses in implementing ERP platforms
                  that bring important operations and information into
                  one connected environment.
                </p>

                <Link to="/contact" className="erp-service-link">
                  Discuss your requirements
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>


            <article className="erp-service-row erp-service-row-reverse">

              <div className="erp-service-image erp-image-development"></div>

              <div className="erp-service-content">

                <div className="erp-service-icon">
                  <Settings />
                </div>

                <span className="erp-service-tag">
                  BUSINESS SYSTEM DEVELOPMENT
                </span>

                <h3>
                  Build systems around your
                  <span> specific requirements.</span>
                </h3>

                <p>
                  Where existing platforms cannot fully address a
                  business requirement, we develop practical systems
                  designed around the organization's processes.
                </p>

                <Link to="/contact" className="erp-service-link">
                  Explore a custom solution
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>


            <article className="erp-service-row">

              <div className="erp-service-image erp-image-integration"></div>

              <div className="erp-service-content">

                <div className="erp-service-icon">
                  <Workflow />
                </div>

                <span className="erp-service-tag">
                  SYSTEM INTEGRATION
                </span>

                <h3>
                  Connect applications and
                  <span> business information.</span>
                </h3>

                <p>
                  We connect business applications and data sources
                  to reduce duplication and create smoother information
                  flow between systems.
                </p>

                <Link to="/contact" className="erp-service-link">
                  Connect your systems
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>


            <article className="erp-service-row erp-service-row-reverse">

              <div className="erp-service-image erp-image-support"></div>

              <div className="erp-service-content">

                <div className="erp-service-icon">
                  <RefreshCw />
                </div>

                <span className="erp-service-tag">
                  SYSTEM IMPROVEMENT & SUPPORT
                </span>

                <h3>
                  Improve the systems you
                  <span> already depend on.</span>
                </h3>

                <p>
                  We help businesses improve existing systems, resolve
                  operational challenges and adapt technology as their
                  requirements evolve.
                </p>

                <Link to="/contact" className="erp-service-link">
                  Improve your existing system
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

      <section className="erp-benefits">

        <div className="container">

          <div className="erp-benefits-grid">

            <div className="erp-benefits-content">

              <span className="erp-section-label">
                BUSINESS IMPACT
              </span>

              <h2>
                Technology that gives
                <span> your business clarity.</span>
              </h2>

              <p>
                The goal isn't simply to introduce another system.
                It is to make the way your business operates more
                connected, visible and manageable.
              </p>

              <Link
                to="/contact"
                className="erp-outline-button"
              >
                Talk to Immortrix
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="erp-check-list">

              <div>
                <CheckCircle2 />
                <span>Centralized business information</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Improved operational visibility</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Reduced duplication of work</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Better coordination between teams</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>More reliable business reporting</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Systems that can grow with the business</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="erp-cta">

        <div className="erp-cta-image"></div>
        <div className="erp-cta-overlay"></div>

        <div className="container">

          <div className="erp-cta-inner">

            <div>

              <span>
                BUILD BETTER SYSTEMS
              </span>

              <h2>
                Ready to improve the way
                <strong> your business operates?</strong>
              </h2>

            </div>

            <Link to="/contact">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ERPBusinessSystems;