import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";

import PageLoader from "./components/PageLoader/PageLoader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import useScrollReveal from "./hooks/useScrollReveal";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Insights from "./pages/Insights/Insights";
import NotFound from "./pages/NotFound/NotFound";

import CustomSoftware from "./pages/Solutions/CustomSoftware/CustomSoftware";
import MobileApplications from "./pages/Solutions/MobileApplications/MobileApplications";
import ERPBusinessSystems from "./pages/Solutions/ERPBusinessSystems/ERPBusinessSystems";
import BusinessAutomation from "./pages/Solutions/BusinessAutomation/BusinessAutomation";
import DataReportingBI from "./pages/Solutions/DataReportingBI/DataReportingBI";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


/* =========================================================
   PAGE TITLES
   (set here, not inside the pages, because Home also renders
   About, Insights and Contact and their titles would clash)
========================================================= */

const SITE_NAME = "Immortrix Technologies Limited";

const DEFAULT_TITLE =
  "Immortrix Technologies Limited | Trusted Digital Partner For Modern Businesses";

const PAGE_TITLES = {
  "/about": "About Us",
  "/insights": "Insights",
  "/contact": "Contact Us",
  "/solutions/custom-software": "Custom Software Solutions",
  "/solutions/mobile-applications": "Mobile Application Solutions",
  "/solutions/erp-business-systems": "ERP & Business Systems",
  "/solutions/business-automation": "Business Automation Solutions",
  "/solutions/data-reporting-bi": "Data, Reporting & Business Intelligence",
};


/* =========================================================
   WEBSITE LAYOUT
========================================================= */

function WebsiteLayout() {
  const location = useLocation();

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // page title per route
  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    const title = PAGE_TITLES[path];

    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  }, [location.pathname]);

  // fade / slide sections in as they scroll into view
  useScrollReveal();

  return (
    <div className="website-layout">

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="page-content" id="main-content">
        <Outlet />
      </main>

      {/* PARTNERS / CLIENTS */}
      <Partners />

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <Router>

      {/* GLOBAL EXTRAS */}
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />

      <Routes>

        <Route element={<WebsiteLayout />}>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* INSIGHTS */}
          <Route
            path="/insights"
            element={<Insights />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ================= SOLUTIONS ================= */}

          <Route
            path="/solutions/custom-software"
            element={<CustomSoftware />}
          />

          <Route
            path="/solutions/mobile-applications"
            element={<MobileApplications />}
          />

          <Route
            path="/solutions/erp-business-systems"
            element={<ERPBusinessSystems />}
          />

          <Route
            path="/solutions/business-automation"
            element={<BusinessAutomation />}
          />

          <Route
            path="/solutions/data-reporting-bi"
            element={<DataReportingBI />}
          />

          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>

      </Routes>

    </Router>
  );
}

export default App;