import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import Spinner from "./components/Spinner/Spinner";
import MenuToggle from "./components/Mobile/MenuToggle";
import NavArrows from "./components/Navigation/NavArrows";
import Data from "./data/content.json";
import Photo from "./images/main_photo.jpg";

export default function App() {
  const loadingTime = 2000;
  const [headerClass, setHeaderClass] = useState("");
  const [menuToggleClass, setMenuToggleClass] = useState("open");
  const [selectedSection, setSelectedSection] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isShow, setShow] = useState(true);
  //const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleSectionClick = (index) => {
    hideMenu();
    setSelectedSection(index);
  };

  const handleMenuToggleClick = () => {
    isShow ? hideMenu() : showMenu();
  };

  function showMenu() {
    setMenuToggleClass("open");
    setHeaderClass("");
    setShow(true);
    console.log("Excuted: Show / " + isShow);
  }
  function hideMenu() {
    setMenuToggleClass("");
    setHeaderClass("animate mobile-menu-hide");
    setShow(false);
    console.log("Excuted: unShow / " + isShow);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header id="site_header" className={`header ${headerClass}`}>
            <div className="header-content">
              <div className="header-photo">
                <img src={Photo} alt={Data.name} />
              </div>
              <div className="header-titles">
                <h2>{Data.name}</h2>
                <h4>{Data.occupation}</h4>
              </div>
            </div>

            <ul className="main-menu">
              {Data.menus.map((m, index) => (
                <li key={index} className="nav-anim">
                  <a onClick={() => handleSectionClick(index)}>
                    <span className={`menu-icon lnr ${m.classIcon}`}></span>
                    <span className="link-text">{m.menu}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="social-links">
              <ul>
                {Data.menus[0].content.socials.map((s, index) => (
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

          <div
            className={`menu-toggle ${menuToggleClass}`}
            onClick={handleMenuToggleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <NavArrows
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />

          <div className="content-area">
            <div className="sections">
              <section
                className={`${
                  selectedSection === 0 ? "active" : ""
                } start-page`}
              >
                <Home data={Data.menus[0]} name={Data.name} />
              </section>
              <section className={`${selectedSection === 1 ? "active" : ""}`}>
                <About data={Data.menus[1]} />
              </section>
              <section className={`${selectedSection === 2 ? "active" : ""}`}>
                <Resume data={Data.menus[2]} />
              </section>
              <section className={`${selectedSection === 3 ? "active" : ""}`}>
                <Contact data={Data.menus[3]} />
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}
