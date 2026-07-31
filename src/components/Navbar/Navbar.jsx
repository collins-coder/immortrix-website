import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
    setSolutionsOpen(false);
  };

  const solutions = [
    {
      title: "Custom Software Solutions",
      path: "/solutions/custom-software",
    },
    {
      title: "Mobile Application Solutions",
      path: "/solutions/mobile-applications",
    },
    {
      title: "ERP & Business Systems",
      path: "/solutions/erp-business-systems",
    },
    {
      title: "Business Automation Solutions",
      path: "/solutions/business-automation",
    },
    {
      title: "Data, Reporting & Business Intelligence",
      path: "/solutions/data-reporting-bi",
    },
  ];

  return (
    <>
      <nav
        className={`custom-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* LOGO */}

          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <div className="logo-image-wrapper">
              <img
                src="/logo.jpg"
                alt="Immortrix Technologies Limited"
                className="logo-image"
              />
            </div>

            <div className="logo-company-name">
              <strong>IMMORTRIX</strong>
              <span>TECHNOLOGIES LIMITED</span>
            </div>
          </Link>


          {/* DESKTOP NAV */}

          <ul className="navbar-links">

            <li>
              <Link to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>
                ABOUT US
              </Link>
            </li>


            {/* SOLUTIONS */}

            <li className="solutions-nav-item">

              <button
                type="button"
                className={`solutions-trigger ${
                  solutionsOpen ? "solutions-active" : ""
                }`}
                onClick={() =>
                  setSolutionsOpen((prev) => !prev)
                }
                aria-expanded={solutionsOpen}
              >
                <span>SOLUTIONS</span>

                <ChevronDown
                  size={15}
                  className={
                    solutionsOpen
                      ? "chevron-open"
                      : ""
                  }
                />
              </button>


              {solutionsOpen && (
                <div className="solutions-dropdown">

                  <div className="solutions-dropdown-list">

                    {solutions.map((solution) => (
                      <Link
                        key={solution.path}
                        to={solution.path}
                        className="solution-dropdown-item"
                        onClick={closeMenu}
                      >
                        {solution.title}
                      </Link>
                    ))}

                  </div>

                </div>
              )}

            </li>


            <li>
              <Link
                to="/insights"
                onClick={closeMenu}
              >
                INSIGHTS
              </Link>
            </li>


            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>

          </ul>


          {/* DESKTOP CTA */}

          <Link
            to="/contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            LET'S TALK
          </Link>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => {
              setMobileMenu((prev) => !prev);
              setSolutionsOpen(false);
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </nav>


      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          mobileMenu ? "mobile-open" : ""
        }`}
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          HOME
        </Link>


        <Link
          to="/about"
          onClick={closeMenu}
        >
          ABOUT US
        </Link>


        {/* MOBILE SOLUTIONS */}

        <button
          type="button"
          className="mobile-solutions-trigger"
          onClick={() =>
            setSolutionsOpen((prev) => !prev)
          }
        >
          <span>SOLUTIONS</span>

          <ChevronDown
            size={18}
            className={
              solutionsOpen
                ? "chevron-open"
                : ""
            }
          />
        </button>


        {solutionsOpen && (
          <div className="mobile-solutions">

            {solutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                onClick={closeMenu}
              >
                {solution.title}
              </Link>
            ))}

          </div>
        )}


        <Link
          to="/insights"
          onClick={closeMenu}
        >
          INSIGHTS
        </Link>


        <Link
          to="/contact"
          onClick={closeMenu}
        >
          CONTACT
        </Link>


        <Link
          to="/contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          LET'S TALK
        </Link>

      </div>
    </>
  );
}

export default Navbar;