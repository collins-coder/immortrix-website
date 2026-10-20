import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/logo.png";

import "./PageLoader.css";

function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          role="status"
          aria-label="Loading"
        >
          <div className="page-loader-logo">
            <span className="page-loader-ring"></span>
            <img src={logo} alt="Immortrix Technologies" />
          </div>
          <div className="page-loader-bar"><i></i></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;