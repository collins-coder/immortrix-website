import React from "react";

function CTASection() {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">

          <h2>
            Ready To Transform Your Business?
          </h2>

          <p>
            Let's build scalable websites,
            enterprise systems and digital solutions together.
          </p>

          <button
            className="cta-btn"
            onClick={scrollToContact}
          >
            Start Your Project
          </button>

        </div>
      </div>
    </section>
  );
}

export default CTASection;