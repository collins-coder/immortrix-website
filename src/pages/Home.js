import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Blog from "../components/Blog";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

import "../styles/main.css";

function Home() {
  return (
    <div className="main-container">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <Stats />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* BLOG */}
      <Blog />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CALL TO ACTION */}
      <CTA />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP FLOAT */}
      <WhatsAppFloat />

    </div>
  );
}

export default Home;