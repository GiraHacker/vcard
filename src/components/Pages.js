import Home from "./custom_pages/Home";
import AboutMe from "./custom_pages/AboutMe";
import Resume from "./custom_pages/Resume";
import Contact from "./custom_pages/Contact";

export default function Pages() {
  return (
    <div className="content-area">
      <div className="animated-sections">
        <Home />
        <AboutMe />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
