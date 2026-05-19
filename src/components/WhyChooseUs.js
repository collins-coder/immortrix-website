import React from "react";
import {
  ShieldCheck,
  Zap,
  Headphones,
  TrendingUp
} from "lucide-react";

function WhyChooseUs() {

  const features = [
    {
      icon: <Zap />,
      title: "Fast Delivery",
      desc: "Modern systems delivered quickly with scalable architecture."
    },
    {
      icon: <ShieldCheck />,
      title: "Reliable Solutions",
      desc: "Stable and secure systems built for business operations."
    },
    {
      icon: <Headphones />,
      title: "Technical Support",
      desc: "Continuous maintenance and technical assistance."
    },
    {
      icon: <TrendingUp />,
      title: "Business Growth",
      desc: "Technology designed to improve efficiency and growth."
    }
  ];

  return (

    <section className="why-section">

      <div className="container">

        <div className="text-center mb-5">

          <div className="section-badge">
            WHY CHOOSE US
          </div>

          <h2 className="why-title">
            Technology Built For Modern Businesses
          </h2>

        </div>

        <div className="row">

          {features.map((item, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="why-card">

                <div className="why-icon">
                  {item.icon}
                </div>

                <h5>{item.title}</h5>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;