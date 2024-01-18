import React from "react";
import HomeLogo from "../img/Logo.svg";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo_header">
          <img src={HomeLogo} alt="" />
        </div>
        <div className="nav_bar">
          <NavLink className="header_nav" to="/">Home</NavLink>
          <NavLink className="header_nav" to="rickMorty">Rick and Morty</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
