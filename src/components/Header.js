import DownloadCV from "./DownloadCV";
import Menu from "./Menu";
import Social from "./Social";


export default function Header({ data }) {
  return (
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="header-photo">
          <img src="../img/main_photo.jpg" alt={data.name} />
        </div>
        <div className="header-titles">
          <h2>{data.name}</h2>
          <h4>{data.occupation}</h4>
        </div>
      </div>
      <Menu items={data.menus} />
      <Social socials={data.menus[0].content.socials} />
      <DownloadCV url={data.menus[0].content.url} />
      <div className="copyrights">© 2023 All rights reserved.</div>
    </header>
  );
}
