import React from "react";
import {
  Globe,
  Smartphone,
  Database,
  Server,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

function Services() {

  const services = [
    {
      icon: <Globe />,
      title: "Website Development",
      desc: "Modern company websites, e-commerce platforms and responsive web applications."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      desc: "Android and cross-platform mobile apps built for performance and scalability."
    },
    {
      icon: <Database />,
      title: "ERP & Business Systems",
      desc: "Custom enterprise systems for sales, inventory, operations and automation."
    },
    {
      icon: <LayoutDashboard />,
      title: "UI/UX Design",
      desc: "Professional interfaces focused on usability, aesthetics and user experience."
    },
    {
      icon: <ShieldCheck />,
      title: "IT Consultation",
      desc: "Strategic technology guidance and digital transformation consulting."
    }
  ];

  return (
    <section className="services-section" id="services">

      <div className="container">

        {/* HEADER */}
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

        {/* SERVICE GRID */}
        <div className="row mt-5">

          {services.map((service, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.desc}</p>

                <button className="service-btn">
                  Learn More
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