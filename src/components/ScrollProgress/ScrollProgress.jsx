import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./ScrollProgress.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export default ScrollProgress;