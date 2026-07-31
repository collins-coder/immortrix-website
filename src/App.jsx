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

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Insights from "./pages/Insights/Insights";

import CustomSoftware from "./pages/Solutions/CustomSoftware/CustomSoftware";
import MobileApplications from "./pages/Solutions/MobileApplications/MobileApplications";
import ERPBusinessSystems from "./pages/Solutions/ERPBusinessSystems/ERPBusinessSystems";
import BusinessAutomation from "./pages/Solutions/BusinessAutomation/BusinessAutomation";
import DataReportingBI from "./pages/Solutions/DataReportingBI/DataReportingBI";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


/* =========================================================
   WEBSITE LAYOUT
========================================================= */

function WebsiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="website-layout">

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="page-content">
        <Outlet />
      </main>

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

        </Route>

      </Routes>

    </Router>
  );
}

export default App;