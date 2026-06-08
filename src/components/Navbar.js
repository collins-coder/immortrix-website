import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

import {
  Menu,
  X,
  ArrowRight
} from "lucide-react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (

    <>

      <nav
        className={`custom-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >

        <div className="container navbar-container">

          {/* LOGO */}

          <a href="#home" className="navbar-logo">
  <img src={logo} alt="Immortrix Logo" className="logo-image" />

  <div className="logo-text">
    <span className="company-name">
      IMMORTRIX<br />TECHNOLOGIES<br />LIMITED
    </span>
  </div>
</a>

         

          {/* DESKTOP NAVIGATION */}

          <ul className="navbar-links">

            <li>
              <a href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#services">
                Services
              </a>
            </li>

            <li>
              <a href="#blog">
                Blog
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>

          {/* RIGHT SIDE */}

          <div className="navbar-right">

            <a
              href="#contact"
              className="consult-btn"
            >

              Get Consultation

              <ArrowRight />

            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
            >

              {
                mobileMenu
                  ? <X />
                  : <Menu />
              }

            </button>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          mobileMenu
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <a
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#blog"
          onClick={closeMenu}
        >
          Blog
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="consult-btn mobile-btn"
          onClick={closeMenu}
        >

          Get Consultation

          <ArrowRight />

        </a>

      </div>

    </>

  );
}

export default Navbar;