import React from "react";

import HomeLogo from "../img/Logo.svg"

const Sidebar = () => {
  return (
      <div className="sidebar">
        <div className="logo_header">
          <img src={HomeLogo} alt="" />
        </div>
        <div className="nav_bar">
          <a href="#home" className="header_nav header_nav_active">
            Home
          </a>
          <a href="#about_me" className="header_nav">
            About me
          </a>
          <a href="#porfolio" className="header_nav">
            Portfolio
          </a>
          <a href="#skills" className="header_nav">
            Skills
          </a>
          <a href="#recomendation" className="header_nav">
            Recommendations
          </a>
        </div>
      </div>
  );
};

export default Sidebar;
