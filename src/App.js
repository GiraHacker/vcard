import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import Spinner from "./components/Spinner/Spinner";
import Data from "./data/content.json";
import Photo from "./images/main_photo.jpg";

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
                <img src={Photo} alt="Alex Smith" />
              </div>
              <div className="header-titles">
                <h2>{Data.name}</h2>
                <h4>{Data.occupation}</h4>
              </div>
            </div>

            <ul className="main-menu">
              {Data.menus.map((m, index) => (
                <li key={index} className="nav-anim">
                  <a className="nav-anim" onClick={() => handleSectionClick(index)}>
                    <span className={`menu-icon lnr ${m.classIcon}`}></span>
                    <span className="link-text">{m.menu}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="social-links">
              <ul>
                {Data.menus[0].content.socials.map((s,index)=> (
                   <li key={index}>
                   <a href={s.link} target="_blank">
                     <i className={`fab ${s.icon}`}></i>
                   </a>
                 </li>
                ))}
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
            <div className="lmpixels-arrow-right cursor" onClick={handleNextClick}>
              <i className="lnr lnr-chevron-right"></i>
            </div>
            <div className="lmpixels-arrow-left cursor" onClick={handlePreviousClick}>
              <i className="lnr lnr-chevron-left"></i>
            </div>
          </div>

          <div className="content-area">
            <div className="sections">
              <section
                className={`${selectedSection === 0 ? "active" : ""} start-page`}>
                <Home data={Data.menus[0]} name={Data.name}  />
              </section>
              <section className={`${selectedSection === 1 ? "active" : ""}`}>
                <About data={Data.menus[1]} />
              </section>
              <section className={`${selectedSection === 2 ? "active" : ""}`}>
                <Resume data={Data.menus[2]}  />
              </section>
              <section className={`${selectedSection === 3 ? "active" : ""}`}>
                <Contact data={Data.menus[3]}  />
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}
