import React, { useEffect, useState } from "react";

import "./TypeWriter.css";

function TypeWriter({
  phrases,
  typeSpeed = 85,
  deleteSpeed = 45,
  pause = 1800,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) return undefined;

    const full = phrases[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === full) delay = pause;
    if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? full.slice(0, text.length - 1)
            : full.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause, reduceMotion]);

  if (reduceMotion) return <span>{phrases[0]}</span>;

  return (
    <span className="typewriter" aria-label={phrases[index]}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-cursor" aria-hidden="true"></span>
    </span>
  );
}

export default TypeWriter;