import React, { useEffect, useRef } from "react";

import "./CustomCursor.css";

function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    document.body.classList.add("has-custom-cursor");

    let x = 0, y = 0, rx = 0, ry = 0, frame;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onOver = (e) => {
      const hot =
        e.target.closest &&
        e.target.closest("a, button, input, textarea, select, [role='button']");
      if (ring.current) ring.current.classList.toggle("is-hot", !!hot);
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true"></div>
    </>
  );
}

export default CustomCursor;