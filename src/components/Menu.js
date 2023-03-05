export default function Menu() {
  return (
    <ul className="main-menu">
      <li className="active">
        <a href="#home" className="nav-anim">
          <span className="menu-icon lnr lnr-home"></span>
          <span className="link-text">Home</span>
        </a>
      </li>
      <li>
        <a href="#about-me" className="nav-anim">
          <span className="menu-icon lnr lnr-user"></span>
          <span className="link-text">About Me</span>
        </a>
      </li>
      <li>
        <a href="#resume" className="nav-anim">
          <span className="menu-icon lnr lnr-graduation-hat"></span>
          <span className="link-text">Resume</span>
        </a>
      </li>
      <li>
        <a href="#contact" className="nav-anim">
          <span className="menu-icon lnr lnr-envelope"></span>
          <span className="link-text">Contact</span>
        </a>
      </li>
    </ul>
  );
}
