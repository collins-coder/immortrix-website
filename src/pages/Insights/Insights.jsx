import React from "react";

import {
  ArrowUpRight,
  TrendingUp,
  Lightbulb,
  Cpu,
} from "lucide-react";

import "./Insights.css";

function Insights() {
  const insights = [
    {
      icon: <TrendingUp />,
      category: "Business Technology",
      title: "Signs Your Business Is Ready for Digital Transformation",
      excerpt:
        "Growth can expose outdated processes, disconnected systems and repetitive work. Here are the signals worth paying attention to.",
      date: "Business Insight",
    },
    {
      icon: <Lightbulb />,
      category: "Digital Strategy",
      title: "Technology Should Solve Problems, Not Create Them",
      excerpt:
        "The right digital solution starts with understanding the business problem before choosing the technology.",
      date: "Our Perspective",
    },
    {
      icon: <Cpu />,
      category: "Technology",
      title: "Where Automation Can Make the Biggest Difference",
      excerpt:
        "From repetitive administration to reporting and workflow management, automation can transform how teams operate.",
      date: "Technology Insight",
    },
  ];

  return (
    <main className="insights-page">

      {/* ================= HERO ================= */}

      <section className="insights-hero">

        <div className="insights-hero-background"></div>
        <div className="insights-hero-overlay"></div>

        <div className="container">

          <div className="insights-hero-content">

            <span className="insights-label">
              INSIGHTS
            </span>

            <h1>
              Ideas, perspectives &
              <span> digital thinking.</span>
            </h1>

            <p>
              Practical perspectives on technology, business systems,
              digital transformation and the changing way businesses work.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="insights-content-section">

        <div className="container">

          {/* FEATURED */}

          <article className="featured-insight">

            <div className="featured-insight-visual">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                alt="Business team discussing digital technology"
              />

              <div className="featured-visual-overlay"></div>

              <div className="featured-visual-content">

                <span>
                  IMMORTRIX TECHNOLOGIES
                </span>

                <strong>
                  DIGITAL
                  <br />
                  THINKING
                </strong>

                <small>
                  BUSINESS × TECHNOLOGY
                </small>

              </div>

            </div>

            <div className="featured-insight-content">

              <span className="featured-category">
                FEATURED INSIGHT
              </span>

              <h2>
                Digital transformation starts with the
                <span> business.</span>
              </h2>

              <p>
                Technology alone doesn't transform a business.
                Understanding how people, processes and systems
                work together is where meaningful transformation begins.
              </p>

              <p>
                Before introducing new software, automation or
                business systems, businesses need to understand
                what is slowing them down and where technology
                can create meaningful improvement.
              </p>

              <div className="featured-bottom">

                <span>
                  Business & Technology
                </span>

                <ArrowUpRight />

              </div>

            </div>

          </article>


          {/* INSIGHT CARDS */}

          <div className="insights-grid">

            {insights.map((insight, index) => (

              <article
                className="insight-card"
                key={index}
              >

                <div className="insight-card-top">

                  <div className="insight-icon">
                    {insight.icon}
                  </div>

                  <span>
                    {insight.category}
                  </span>

                </div>

                <div className="insight-card-content">

                  <h3>
                    {insight.title}
                  </h3>

                  <p>
                    {insight.excerpt}
                  </p>

                </div>

                <div className="insight-card-bottom">

                  <span>
                    {insight.date}
                  </span>

                  <button type="button" aria-label="Read insight">
                    <ArrowUpRight />
                  </button>

                </div>

              </article>

            ))}

          </div>


          {/* BOTTOM MESSAGE */}

          <div className="insights-bottom">

            <div>
              <span>MORE FROM IMMORTRIX</span>

              <h3>
                Practical technology thinking for
                <span> modern businesses.</span>
              </h3>
            </div>

            <p>
              We believe technology should be practical,
              purposeful and connected to real business needs.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Insights;