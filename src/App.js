import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import WhyChooseUs from "./components/WhyChooseUs";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StatsBanner from "./components/StatsBanner";
import CTASection from "./components/CTASection";
import Loader from "./components/Loader";


/* STYLES */
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  return (
    <>

      <Loader />
      
      <Navbar />

      <Hero />

      <StatsBanner />

      <About />

      <Services />

      <Blog />

      <WhyChooseUs />
      
      <Contact />

      <CTASection />

      
      
      <Footer />

    </>
  );
}

function App() {
  return (
    <Router>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

      </Routes>

    </Router>
  );
}

export default App;