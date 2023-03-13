import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Spinner from "./components/Spinner/Spinner";

export default function App() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };
  const handleNextClick = () => {
    setSelectedSection(selectedSection === 2 ? 0 : selectedSection + 1);
  };
  const handlePreviousClick = () => {
    setSelectedSection(selectedSection === 0 ? 2 : selectedSection - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
              <div className="header-photo">
                <img src="img/main_photo.jpg" alt="Alex Smith" />
              </div>
              <div className="header-titles">
                <h2>Alex Smith</h2>
                <h4>Web Designer</h4>
              </div>
            </div>

            <ul className="main-menu">
              <li className="nav-anim active">
                <a className="nav-anim" onClick={() => handleSectionClick(0)}>
                  <span className="menu-icon lnr lnr-home"></span>
                  <span className="link-text">Home</span>
                </a>
              </li>
              <li>
                <a className="nav-anim" onClick={() => handleSectionClick(1)}>
                  <span className="menu-icon lnr lnr-user"></span>
                  <span className="link-text">About Me</span>
                </a>
              </li>
              <li>
                <a className="nav-anim" onClick={() => handleSectionClick(2)}>
                  <span className="menu-icon lnr lnr-graduation-hat"></span>
                  <span className="link-text">Resume</span>
                </a>
              </li>
              <li>
                <a className="nav-anim" onClick={() => handleSectionClick(3)}>
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">Contact</span>
                </a>
              </li>
            </ul>

            <div className="social-links">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-buttons">
              <a href="#" target="_blank" className="btn btn-primary">
                Download CV
              </a>
            </div>

            <div className="copyrights">© 2023 All rights reserved.</div>
          </header>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="lmpixels-arrows-nav">
            <div className="lmpixels-arrow-right" onClick={handleNextClick}>
              <i className="lnr lnr-chevron-right"></i>
            </div>
            <div className="lmpixels-arrow-left" onClick={handlePreviousClick}>
              <i className="lnr lnr-chevron-left"></i>
            </div>
          </div>

          <div className="content-area">
            <div className="sections">
              <section
                className={`${
                  selectedSection === 0 ? "active" : ""
                } start-page`}
              >
                <Home />
              </section>
              <section className={`${selectedSection === 1 ? "active" : ""}`}>
                <About />
              </section>
              <section className={`${selectedSection === 2 ? "active" : ""}`}>
                <Resume />
              </section>
              <section className={`${selectedSection === 3 ? "active" : ""}`}>
                <Contact />
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}
