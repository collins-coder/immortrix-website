import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import "./Partners.css";

/*
  ADD CLIENTS HERE
  - name:  used for the logo's alt text (accessibility and SEO)
  - logo:  file inside public/partners/
  - url:   optional website link (leave "" for no link)
*/

const PARTNERS = [
  {
    name: "Kung'aa Initiative",
    logo: "/partners/kungaa.png",
    url: "",
  },
  // {
  //   name: "Client Name",
  //   logo: "/partners/client-name.png",
  //   url: "https://example.com",
  // },
];

// With this many partners or more, the row becomes a scrolling carousel.
const CAROUSEL_FROM = 4;

function PartnerBrand({ partner }) {
  const [logoFailed, setLogoFailed] = React.useState(false);

  const content =
    partner.logo && !logoFailed ? (
      <img
        className="partner-brand-logo"
        src={partner.logo}
        alt={`${partner.name} logo`}
        loading="lazy"
        onError={() => setLogoFailed(true)}
      />
    ) : (
      // Shown only if the logo file is missing or fails to load
      <span className="partner-brand-fallback">{partner.name}</span>
    );

  return partner.url ? (
    <a
      className="partner-brand"
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
    >
      {content}
    </a>
  ) : (
    <div className="partner-brand">{content}</div>
  );
}

function Partners() {
  const reduce = useReducedMotion();

  if (PARTNERS.length === 0) return null;

  const carousel = PARTNERS.length >= CAROUSEL_FROM && !reduce;

  return (
    <section className="partners-section" id="partners">

      <div className="partners-container">

        <motion.div
          className="partners-heading"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="partners-label">OUR PARTNERS</span>
          <h2 className= "partners-title">We are proud to work with</h2>
        </motion.div>

      </div>

      {carousel ? (
        <div className="partners-marquee">
          <div className="partners-track">
            {[0, 1].map((copy) => (
              <div
                className="partners-group"
                key={copy}
                aria-hidden={copy === 1}
              >
                {PARTNERS.map((p) => (
                  <PartnerBrand partner={p} key={p.name} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="partners-container">
          <motion.div
            className="partners-static"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {PARTNERS.map((p) => (
              <PartnerBrand partner={p} key={p.name} />
            ))}
          </motion.div>
        </div>
      )}

    </section>
  );
}

export default Partners;