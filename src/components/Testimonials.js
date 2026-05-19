import React from "react";

function Testimonials() {

  const testimonials = [
    {
      name: "Business Owner",
      role: "Retail Industry",
      text: "Immortrix delivered a modern system that improved our operations."
    },
    {
      name: "Operations Manager",
      role: "Distribution Company",
      text: "Professional development process and excellent support."
    },
    {
      name: "Startup Founder",
      role: "Technology Sector",
      text: "Our website and automation tools were delivered perfectly."
    }
  ];

  return (

    <section className="testimonial-section">

      <div className="container">

        <div className="text-center mb-5">

          <div className="section-badge">
            TESTIMONIALS
          </div>

          <h2 className="testimonial-title">
            What Clients Say
          </h2>

        </div>

        <div className="row">

          {testimonials.map((item, index) => (

            <div className="col-lg-4 mb-4" key={index}>

              <div className="testimonial-card">

                <p className="testimonial-text">
                  "{item.text}"
                </p>

                <h5>{item.name}</h5>

                <span>{item.role}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;