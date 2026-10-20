import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import ParticleField from "../../components/ParticleField/ParticleField";

import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <ParticleField />

      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="notfound-code">404</div>
        <h1>This page has wandered off.</h1>
        <p>
          The page you are looking for does not exist or has moved. Let's get
          you back on track.
        </p>
        <Link to="/" className="notfound-btn btn-shine">
          <ArrowLeft /> Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;