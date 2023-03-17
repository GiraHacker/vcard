import React, { useState } from "react";

export default function MenuToggle({ setHeaderClass,menuToggleClass,setMenuToggleClass }) {
  const [menuHideClass, setMenuHideClass] = useState("");


  // função que irá lidar com o clique no botão
  const handleMenuToggleClick = () => {
    setMenuHideClass(menuHideClass === "" ? "mobile-menu-hide" : "");
    setMenuToggleClass(menuToggleClass === "" ? "open" : "");
    setHeaderClass("animate " + menuHideClass);

  };

  return (
    <div
      className={`menu-toggle ${menuToggleClass}`}
      onClick={handleMenuToggleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
