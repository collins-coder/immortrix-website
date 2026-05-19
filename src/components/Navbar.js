import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  Menu,
  X
} from "lucide-react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

    <nav className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container navbar-container">

        {/* LOGO */}

        <div className="logo-image-wrapper">
          <img
  src={logo}
  alt="immortrix Logo"
  className="logo-image"/>

</div>

        
        {/* DESKTOP LINKS */}

        <ul className="navbar-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* RIGHT SIDE */}

        <div className="navbar-right">

          <button className="consult-btn">
            Get Consultation
          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >

            {mobileMenu ? <X /> : <Menu />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <button className="consult-btn mobile-btn">
          Get Consultation
        </button>

      </div>

    </nav>
  );
}

export default Navbar;