import React from "react";
import {
  Rocket,
  Target,
  Lightbulb,
  ShieldCheck
} from "lucide-react";

function About() {

  const aboutCards = [
    {
      icon: <Rocket />,
      title: "Innovation",
      desc: "We create modern digital solutions designed for future-ready businesses."
    },
    {
      icon: <Target />,
      title: "Our Mission",
      desc: "To empower businesses through smart technology, automation and scalable digital systems."
    },
    {
      icon: <Lightbulb />,
      title: "Our Vision",
      desc: "To become a leading technology company driving digital transformation and innovation."
    },
    {
      icon: <ShieldCheck />,
      title: "Professionalism",
      desc: "Delivering secure, reliable and high-quality technology solutions with excellence."
    }
  ];

  return (
    <section className="about-section" id="about">

      <div className="container">

        {/* HEADER */}
        <div className="about-header text-center">

          <div className="section-badge">
            ABOUT IMMORTRIX
          </div>

          <p className="about-subtitle">
            We help businesses grow through innovative technology,
            scalable systems and powerful digital experiences.
          </p>

        </div>

        {/* CONTENT */}
        <div className="row align-items-center mt-5">

          {/* LEFT TEXT */}
          <div className="col-lg-6 mb-5 mb-lg-0">

            <div className="about-content">

              <h3 className="about-content-title">
                Building The Future Through Technology
              </h3>

              <p className="about-text">
                At Immortrix Technologies, we specialize in delivering
                cutting-edge digital solutions tailored to meet the
                evolving needs of businesses, organizations and individuals.
              </p>

              <p className="about-text">
                From software development and business automation
                to IT support, web systems and digital transformation,
                we focus on building technology that improves efficiency,
                productivity and long-term business growth.
              </p>

              <p className="about-text">
                Driven by creativity, innovation and professionalism,
                we transform ideas into scalable digital solutions
                designed for the modern world.
              </p>

            </div>

          </div>

          {/* RIGHT CARDS */}
          <div className="col-lg-6">

            <div className="row">

              {aboutCards.map((card, index) => (

                <div className="col-md-6 mb-4" key={index}>

                  <div className="about-feature-card">

                    <div className="about-feature-icon">
                      {card.icon}
                    </div>

                    <h4>{card.title}</h4>

                    <p>{card.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;