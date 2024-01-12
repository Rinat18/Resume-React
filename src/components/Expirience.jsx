import React from "react";
import Codeicon from "../img/CodeIcon.svg"
import ProjectsIcon from "../img/ProjectsIcon.svg"
import DesignIcon from "../img/DesignIcon.svg"

const Expirience = () => {
  return (
    <section data-aos="fade-right" className="section2">
      <div className="section2_cards">
        <div className="section2_card">
          <img src={Codeicon} alt="" />
          <p>Опыт 2 года</p>
          <div>Программист</div>
        </div>
        <div className="section2_card">
          <img src={ProjectsIcon} alt="" />
          <p>Опыт 1 года</p>
          <div>Работает</div>
        </div>
        <div className="section2_card">
          <img src={DesignIcon} alt="" />
          <p>Опыт 1 год</p>
          <div>Дизайнер</div>
        </div>
      </div>
      <div className="section2_experiences">
        <div className="section2_experiences_dev">
          <span>Developer</span>
          <p>Front-end</p>
        </div>
        <div className="section2_experiences_dev">
          <span>10 of projects and</span>
          <p>Experiences</p>
        </div>
        <div className="section2_experiences_dev">
          <span>Designer Freelancer</span>
          <p>UI · UX</p>
        </div>
      </div>
    </section>
  );
};

export default Expirience;
