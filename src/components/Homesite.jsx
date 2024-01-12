import React from "react";
import Linkedin from "../img/linkedin.svg"
import GitHub from "../img/github.svg"
import Geroi from "../img/Group 68.png"
import Download from "../img/ArrowLineDown.svg"
import WhatsApp from "../img/WhatsappLogo.svg"

const Homesite = () => {
  return (
    <section id="home" className="section1">
      <div className="section1_left">
        <span>👋 Привет!</span>
        <h2>
          Dosmatov <br />
          Rinat
        </h2>
        <p>Фронтенд-разработчик</p>
        <div>
          <img src={Linkedin} alt="" />
          <img src={GitHub} alt="" />
        </div>
      </div>
      <div className="section1_center">
        <img src={Geroi} alt="" />
      </div>
      <div className="section1_right">
        <a>
          Скачать резюме <img src={Download} alt="" />
        </a>
        <button>
          <img src={WhatsApp} alt="" />
          What's app
        </button>
      </div>
    </section>
  );
};

export default Homesite;
