import React from "react";

function StatsBanner() {

  const stats = [
    {
      number: "Endless",
      label: "Projects Completed"
    },
    {
      number: "Scalable",
      label: "Business Solutions"
    },
    {
      number: "24/7",
      label: "Technical Support"
    },
    {
      number: "100%",
      label: "Client Focus"
    }
  ];

  return (

    <section className="stats-section">

      <div className="container">

        <div className="stats-wrapper">

          <div className="row">

            {stats.map((item, index) => (

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={index}>

                <div className="stats-card">

                  <h2>{item.number}</h2>

                  <p>{item.label}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default StatsBanner;