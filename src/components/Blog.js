import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Database
} from "lucide-react";

function Blog() {

  const [expanded, setExpanded] = useState(null);

  const blogs = [
    {
      icon: <Globe />,
      title: "Why Every Business Needs A Professional Website",
      desc: "Discover how a modern website improves credibility, attracts customers and drives business growth.",
      fullText:
        "A professional website acts as your digital storefront and is available to customers 24/7. It builds trust, increases brand visibility, showcases your products and services, and helps potential clients find your business online. Modern websites also improve customer engagement and generate more leads."
    },
    {
      icon: <Database />,
      title: "How ERP Systems Improve Business Operations",
      desc: "Learn how enterprise systems streamline workflows, automate processes and improve efficiency.",
      fullText:
        "ERP systems integrate sales, inventory, finance, procurement and operations into one platform. This eliminates duplicate work, improves reporting, reduces errors and provides management with real-time insights for better decision-making."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications For Modern Businesses",
      desc: "Explore how mobile apps enhance customer engagement, productivity and digital transformation.",
      fullText:
        "Mobile applications allow businesses to connect directly with customers, automate field operations and improve service delivery. They increase accessibility, enhance user experience and provide a competitive advantage in today's digital economy."
    }
  ];

  return (
    <section className="portfolio-section" id="blog">

      <div className="container">

        <div className="text-center mb-5">

          <div className="section-badge">
            OUR BLOG
          </div>

          <h2 className="portfolio-title">
            Insights, Technology & Digital Innovation
          </h2>

          <p className="services-subtitle">
            Stay updated with the latest trends, strategies and technologies
            shaping modern businesses and digital transformation.
          </p>

        </div>

        <div className="row">

          {blogs.map((blog, index) => (

            <div className="col-lg-4 mb-4" key={index}>

              <div className="portfolio-card">

                <div className="portfolio-icon">
                  {blog.icon}
                </div>

                <h4>{blog.title}</h4>

                <p>{blog.desc}</p>

                {expanded === index && (
                  <div className="mt-3">
                    <p>{blog.fullText}</p>
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
                    : "Read More"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Blog;