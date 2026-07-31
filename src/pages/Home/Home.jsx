import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Workflow,
  Database,
  BarChart3,
} from "lucide-react";

import Hero from "../../components/Hero/Hero";

import About from "../About/About";
import Insights from "../Insights/Insights";
import Contact from "../Contact/Contact";

import "./Home.css";


const solutions = [
  {
    icon: <Code2 />,
    title: "Custom Software Solutions",
    description:
      "Purpose-built software designed around your business processes, workflows and operational requirements.",
    path: "/solutions/custom-software",
  },
  {
    icon: <Smartphone />,
    title: "Mobile Application Solutions",
    description:
      "Mobile applications that connect teams, field operations, customers and business processes from anywhere.",
    path: "/solutions/mobile-applications",
  },
  {
    icon: <Workflow />,
    title: "Business Automation Solutions",
    description:
      "Automation solutions that reduce repetitive work, streamline workflows and improve operational efficiency.",
    path: "/solutions/business-automation",
  },
  {
    icon: <Database />,
    title: "ERP & Business Systems",
    description:
      "Connected business systems that bring operations, information and processes together for better control.",
    path: "/solutions/erp-business-systems",
  },
  {
    icon: <BarChart3 />,
    title: "Data, Reporting & Business Intelligence",
    description:
      "Reporting and business intelligence solutions that turn business data into meaningful insights for decision-making.",
    path: "/solutions/data-reporting-bi",
  },
];


function Home() {
  return (
    <div className="home-page">

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <Hero />


        {/* =====================================================
            ABOUT PREVIEW
        ===================================================== */}

        <About />


        {/* =====================================================
            SOLUTIONS PREVIEW
        ===================================================== */}

        <section
          className="home-solutions"
          id="solutions"
        >

          <div className="home-solutions-container">

            {/* HEADER */}

            <div className="home-solutions-header">

              <div className="home-solutions-heading">

                <span className="home-section-label">
                  OUR SOLUTIONS
                </span>

                <h2>
                  Technology built around
                  <span> real business needs.</span>
                </h2>

              </div>

              <p>
                We create practical digital solutions that help businesses
                improve operations, automate processes, connect teams and
                make better decisions.
              </p>

            </div>


            {/* SOLUTIONS */}

            <div className="home-solutions-list">

              {solutions.map((solution) => (

                <Link
                  to={solution.path}
                  className="home-solution-card"
                  key={solution.path}
                >

                  <div className="home-solution-icon">
                    {solution.icon}
                  </div>


                  <div className="home-solution-content">

                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.description}
                    </p>

                  </div>


                  <div className="home-solution-arrow">
                    <ArrowUpRight />
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            INSIGHTS
        ===================================================== */}

        <Insights />


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <Contact />

      </main>

    </div>
  );
}

export default Home;