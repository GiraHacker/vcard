import Home from "./custom_pages/Home";
import AboutMe from "./custom_pages/AboutMe";
import Resume from "./custom_pages/Resume";
import Contact from "./custom_pages/Contact";

export default function Pages({ data }) {
  return (
    <div className="content-area">
      <div className="animated-sections">
        <Home page={data.menus[0]} name ={data.name}   />
        <AboutMe page={data.menus[1]}/>
        <Resume page={data.menus[2]}/>
        <Contact page={data.menus[3]}/>
      </div>
    </div>
  );
}
