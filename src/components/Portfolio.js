import React from "react";
import {
  Globe,
  Smartphone,
  Database
} from "lucide-react";

function Portfolio() {

  const projects = [
    {
      icon: <Database />,
      title: "FieldOPS ERP",
      desc: "Sales force automation and enterprise operations platform."
    },
    {
      icon: <Globe />,
      title: "Corporate Websites",
      desc: "Modern responsive websites for growing businesses."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      desc: "Custom Android applications for field teams and operations."
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">

      <div className="container">

        <div className="text-center mb-5">

          <div className="section-badge">
            OUR PORTFOLIO
          </div>

          <h2 className="portfolio-title">
            Recent Projects & Digital Solutions
          </h2>

        </div>

        <div className="row">

          {projects.map((project, index) => (

            <div className="col-lg-4 mb-4" key={index}>

              <div className="portfolio-card">

                <div className="portfolio-icon">
                  {project.icon}
                </div>

                <h4>{project.title}</h4>

                <p>{project.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;