import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  Automatically fades and slides every section of the current page into view
  as the visitor scrolls. Hero sections and anything already on screen
  are left alone. Pages need no changes.
*/

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) return undefined;

    const targets = Array.from(
      document.querySelectorAll(".page-content section")
    ).filter((section) => {
      const isHero = /hero/i.test(section.className) || section.id === "home";
      const onScreen =
        section.getBoundingClientRect().top < window.innerHeight * 0.85;
      return !isHero && !onScreen;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((section) => {
      section.classList.add("reveal-on-scroll");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);
}