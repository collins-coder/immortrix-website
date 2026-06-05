import React from "react";
import {
  Globe,
  Smartphone,
  Database
} from "lucide-react";

function Blog() {

  const blogs = [
    {
      icon: <Globe />,
      title: "Why Every Business Needs A Professional Website",
      desc: "Discover how a modern website improves credibility, attracts customers and drives business growth."
    },
    {
      icon: <Database />,
      title: "How ERP Systems Improve Business Operations",
      desc: "Learn how enterprise systems streamline workflows, automate processes and improve efficiency."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications For Modern Businesses",
      desc: "Explore how mobile apps enhance customer engagement, productivity and digital transformation."
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

                <button className="service-btn">
                  Read More
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