import React, { useState } from "react";

export default function MenuToggle({ setHeaderClass,menuToggleClass,setMenuToggleClass }) {
  const [menuHideClass, setMenuHideClass] = useState("mobile-menu-hide");


  // função que irá lidar com o clique no botão
  const handleMenuToggleClick = () => {
    setMenuHideClass(menuHideClass === "" ? "mobile-menu-hide" : "");
    setMenuToggleClass(menuToggleClass === "" ? "open" : "");
    setHeaderClass(menuHideClass === "mobile-menu-hide" ? "animate mobile-menu-hide" : "");
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
