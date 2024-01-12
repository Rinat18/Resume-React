import React from "react";
import Linkedin from "../img/linkedin.svg"
import GitHub from "../img/github.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer_tag">Copyright © Dosmatov Rinat · 2023</div>
        <div>
          <img src={Linkedin} alt="" />
          <img src={GitHub} alt="" />
        </div>
        <div className="numbers">
          <div className="tg">@axacy60 Telegram</div>
          <div className="number">(+996) 555 303 123</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
