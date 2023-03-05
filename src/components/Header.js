import DownloadCV from "./DownloadCV";
import Menu from "./Menu";
import Social from "./Social";

export default function Header() {
    return (
        <header id="site_header" className="header mobile-menu-hide">
        <div className="header-content">
          <div className="header-photo">
            <img src="../img/main_photo.jpg" alt="Alex Smith" />
          </div>
          <div className="header-titles">
            <h2>Alex Smith</h2>
            <h4>Web Designer</h4>
          </div>
        </div>
        <Menu />
        <Social />
        <DownloadCV />
        <div className="copyrights">© 2023 All rights reserved.</div>
      </header>
    );
  }