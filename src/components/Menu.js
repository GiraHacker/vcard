import React, { useState } from 'react';
import { removeAllCaracteresSpecial } from "../components/helpers/utils.js";


export default function Menu({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSectionClick = (index) => {
    console.log(index);
    setActiveIndex(index);
  };

  return (
    <ul className="main-menu">
    {items.map((item, index) => (
      <li key={index} className={index === activeIndex ? "section-active" :  ""}>
        <a href={`#${removeAllCaracteresSpecial(item.menu).toLowerCase()}`} className="nav-anim" onClick={() => {handleSectionClick(index);}}>
          <span className={`menu-icon lnr ${item.classIcon}`}></span>
          <span className="link-text">{item.menu}</span>
        </a>
      </li>
    ))}
  </ul>
  );
}
