import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Database,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

function Services() {

  const [expanded, setExpanded] = useState(null);

  const services = [
    {
      icon: <Globe />,
      title: "Website Development",
      desc: "Modern company websites, e-commerce platforms and responsive web applications.",
      fullText:
        "We design and develop professional business websites, e-commerce platforms, customer portals and web applications that are fast, secure, mobile-friendly and optimized for growth."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      desc: "Android and cross-platform mobile apps built for performance and scalability.",
      fullText:
        "Our mobile solutions help businesses automate operations, improve customer engagement and provide services directly through Android and cross-platform applications."
    },
    {
      icon: <Database />,
      title: "ERP & Business Systems",
      desc: "Custom enterprise systems for sales, inventory, operations and automation.",
      fullText:
        "We build enterprise systems that streamline sales, inventory management, procurement, finance and operational workflows while providing real-time reporting and analytics."
    },
    {
      icon: <LayoutDashboard />,
      title: "UI/UX Design",
      desc: "Professional interfaces focused on usability, aesthetics and user experience.",
      fullText:
        "Our UI/UX design process focuses on creating intuitive, attractive and user-friendly interfaces that improve customer satisfaction and engagement."
    },
    {
      icon: <ShieldCheck />,
      title: "IT Consultation",
      desc: "Strategic technology guidance and digital transformation consulting.",
      fullText:
        "We provide expert IT consultation to help organizations adopt the right technologies, improve efficiency, strengthen security and accelerate digital transformation."
    }
  ];

  return (

    <section className="services-section" id="services">

      <div className="container">

        <div className="services-header text-center">

          <div className="section-badge">
            OUR SERVICES
          </div>

          <h2 className="services-title">
            Innovative IT Solutions For Modern Businesses
          </h2>

          <p className="services-subtitle">
            We help businesses grow through technology,
            automation and scalable digital systems.
          </p>

        </div>

        <div className="row mt-5">

          {services.map((service, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.desc}</p>

                {expanded === index && (
                  <div className="mt-3">
                    <p>{service.fullText}</p>
                  </div>
                )}

                <button
                  className="service-btn"
                  onClick={() =>
                    setExpanded(
                      expanded === index ? null : index
                    )
                  }
                >

                  {expanded === index
                    ? "Show Less"
                    : "Learn More"}

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;