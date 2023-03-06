import React from 'react';

export default function Menu({ items, onSelect }) {
  let hasClass = false; // variável de controle
  function clear(item) {
    return item.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "");
  }
  return (
    <ul className="main-menu">
      {
          items.map((item) => (
          <li key={item.menu} className={`item ${hasClass ? '' : 'active'}`} onClick={() => onSelect(item)}>
          <a href={`#${clear(item.menu).toLowerCase()}`} className="nav-anim">
            <span className={`menu-icon lnr ${item.classIcon}`}></span>
            <span className="link-text">{item.menu}</span>
          </a>
        </li>
      ))}
      {/* <li className="active">
        <a href="#home" className="nav-anim">
          <span className="menu-icon lnr lnr-home"></span>
          <span className="link-text">Home</span>
        </a>
      </li>
      <li>
        <a href="#aboutme" className="nav-anim">
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
      </li> */}
    </ul>
  );
}
