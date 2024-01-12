import React from "react";
import BurgerMenu from "../img/burger-menu.png";
import HomeLogo from "../img/Logo.svg";

const Header = ({ sidebar }) => {
  return (
    <header>
      <div className="header">
        <div className="logo_header">
          <img src={HomeLogo} alt="" />
        </div>
        <div onClick={sidebar} className="burger">
          <img src={BurgerMenu} alt="" />
          <span>MENU</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
