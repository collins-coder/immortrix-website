import React from "react";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Target,
  Users,
  ShieldCheck,
  Puzzle,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./About.css";

const differentiators = [
  {
    icon: <Puzzle />,
    title: "Business-First Approach",
    text:
      "We begin by understanding how your business operates before deciding what technology is needed. Our solutions are shaped around real workflows, challenges and goals.",
  },
  {
    icon: <Lightbulb />,
    title: "Practical Innovation",
    text:
      "We focus on technology that creates measurable value by improving efficiency, visibility, customer experience and decision-making.",
  },
  {
    icon: <Users />,
    title: "Business & Technology Thinking",
    text:
      "We combine technical expertise with an understanding of business operations to solve the problem behind the technology request.",
  },
  {
    icon: <TrendingUp />,
    title: "Designed to Grow",
    text:
      "Our solutions are built with scalability in mind, allowing businesses to adapt their systems as operations and requirements evolve.",
  },
  {
    icon: <ShieldCheck />,
    title: "Reliable Partnership",
    text:
      "Our relationship does not end when a system goes live. We remain available for support, improvement and continued development.",
  },
  {
    icon: <Target />,
    title: "Focused on Results",
    text:
      "We measure our work by the improvement it creates for the business, not simply by the technology we deploy.",
  },
];

const values = [
  "Innovation with purpose",
  "Professionalism and accountability",
  "Customer-focused thinking",
  "Continuous improvement",
  "Reliable technology",
  "Long-term partnerships",
];

function About() {
  return (
    <div className="about-page">

      <main>

        {/* HERO */}
        <section className="about-hero">

          <div className="about-hero-image"></div>
          <div className="about-hero-overlay"></div>

          <div className="container">

            <div className="about-hero-content">

              <span className="about-eyebrow">
                ABOUT IMMORTRIX
              </span>

              <h1>
                About
                <span> Immortrix Technologies.</span>
              </h1>

              <p>
                Immortrix Technologies Limited is a technology company
                focused on helping businesses use technology to improve
                the way they operate, serve their customers and grow.
              </p>

            </div>

          </div>

        </section>


        {/* OUR STORY */}
        <section className="about-story">

          <div className="container">

            <div className="about-story-grid">

              <div className="about-story-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team working together"
                />
              </div>

              <div className="about-story-content">

                <span className="about-section-label">
                  OUR STORY
                </span>

                <h2>
                  Built from a belief that
                  <span> technology should make business better.</span>
                </h2>

                <p>
                  Immortrix Technologies was formed from a simple
                  observation: many businesses have challenges that
                  technology can solve, but finding technology that
                  actually fits the way a business works can be difficult.
                </p>

                <p>
                  We set out to build a technology company that looks
                  beyond simply developing software. Our focus is on
                  understanding the business, identifying what can be
                  improved and using technology to create practical,
                  sustainable solutions.
                </p>

                <p>
                  Today, Immortrix works across software development,
                  mobile applications, business automation, ERP and
                  business systems, data and reporting, and other
                  technology solutions designed around the needs of
                  modern organizations.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* WHO WE ARE */}
        <section className="about-who">

          <div className="container">

            <div className="about-who-grid">

              <div className="about-who-content">

                <span className="about-section-label">
                  WHO WE ARE
                </span>

                <h2>
                  A technology partner focused on
                  <span> meaningful business outcomes.</span>
                </h2>

                <p>
                  We work with businesses and organizations that want
                  to improve the way they operate through technology.
                  This can mean developing a new digital platform,
                  automating an existing process, connecting systems,
                  improving reporting or creating a completely
                  customized business solution.
                </p>

                <p>
                  Rather than applying the same solution everywhere,
                  we take time to understand the people, processes and
                  objectives behind every project.
                </p>

              </div>

              <div className="about-who-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
                  alt="Technology team collaborating"
                />
              </div>

            </div>

          </div>

        </section>


        {/* MISSION / VISION */}
        <section className="about-purpose">

          <div className="container">

            <div className="about-purpose-heading">
              <span className="about-section-label">
                OUR PURPOSE
              </span>

              <h2>
                What drives
                <span> Immortrix.</span>
              </h2>
            </div>

            <div className="about-purpose-grid">

              <div className="purpose-card">

                <div className="purpose-icon">
                  <Target />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To empower businesses with practical, reliable and
                  scalable technology solutions that improve the way
                  they operate, serve customers and grow.
                </p>

              </div>

              <div className="purpose-card purpose-card-highlight">

                <div className="purpose-icon">
                  <Lightbulb />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To become a trusted technology partner for businesses
                  seeking meaningful digital transformation and
                  sustainable growth.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* WHY IMMORTRIX */}
        <section className="about-different">

          <div className="container">

            <div className="about-heading">

              <span className="about-section-label">
                WHY IMMORTRIX
              </span>

              <h2>
                What makes us
                <span> different?</span>
              </h2>

              <p>
                We believe technology should be useful, understandable
                and connected to a clear business objective. That
                principle influences everything we build.
              </p>

            </div>

            <div className="different-grid">

              {differentiators.map((item) => (

                <article
                  className="different-card"
                  key={item.title}
                >

                  <div className="different-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* HOW WE WORK */}
        <section className="about-process">

          <div className="container">

            <div className="about-process-grid">

              <div className="about-process-intro">

                <span className="about-section-label">
                  OUR APPROACH
                </span>

                <h2>
                  From business challenge
                  <span> to digital solution.</span>
                </h2>

                <p>
                  Every project starts with understanding what needs
                  to change. From there, we determine the technology
                  that can create the greatest value.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
                  alt="Business planning and technology strategy"
                />

              </div>

              <div className="process-list">

                <div className="process-item">
                  <div className="process-marker">
                    <CheckCircle2 />
                  </div>

                  <div>
                    <h4>Understand</h4>
                    <p>
                      We learn how your business operates and identify
                      the challenges and opportunities.
                    </p>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-marker">
                    <CheckCircle2 />
                  </div>

                  <div>
                    <h4>Design</h4>
                    <p>
                      We define the right technology approach around
                      your requirements and objectives.
                    </p>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-marker">
                    <CheckCircle2 />
                  </div>

                  <div>
                    <h4>Build & Implement</h4>
                    <p>
                      We develop, integrate, test and implement the
                      solution with attention to quality and usability.
                    </p>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-marker">
                    <CheckCircle2 />
                  </div>

                  <div>
                    <h4>Support & Improve</h4>
                    <p>
                      We support the solution after implementation and
                      help it evolve as your business grows.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* VALUES */}
        <section className="about-values">

          <div className="container">

            <div className="about-values-grid">

              <div className="about-values-heading">

                <span className="about-section-label">
                  OUR VALUES
                </span>

                <h2>
                  Principles behind
                  <span> our work.</span>
                </h2>

                <p>
                  The way we work matters just as much as what we build.
                </p>

              </div>

              <div className="values-list">

                {values.map((value) => (

                  <div
                    className="value-item"
                    key={value}
                  >
                    <CheckCircle2 />
                    <span>{value}</span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="about-cta">

          <div className="container">

            <div className="about-cta-box">

              <div>

                <span className="about-section-label">
                  LET'S BUILD
                </span>

                <h2>
                  Have a business challenge
                  technology can solve?
                </h2>

                <p>
                  Let's talk about what you're trying to improve,
                  automate or build.
                </p>

              </div>

              <Link
                to="/contact"
                className="about-cta-button"
              >
                Talk to Immortrix
                <ArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default About;