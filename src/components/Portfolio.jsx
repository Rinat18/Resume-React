import React from "react";
import Codeicon from "../img/CodeIcon.svg"
import DesignIcon2 from "../img/Group 67.svg"
import DesignIcon from "../img/DesignIcon.svg"
import Image1 from "../img/image 1.png"


const Portfolio = () => {
  return (
    <section id="porfolio" className="section4">
      <div className="section4_title">
        <div className="section4_title_left">
          <span>🔗 Портфолио</span>
          <div>Работы и проекты</div>
        </div>
        <div className="section4_title_right">
          <button>
            <img src={DesignIcon} alt="" />
            UI Design
          </button>
          <button>
            <img src={DesignIcon2} alt="" />
            Design
          </button>
          <button>
            <img src={Codeicon} alt="" />
            Projects
          </button>
        </div>
      </div>
      <div className="section4_cards">
        <div className="section4_card">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>
              <a href="./First_project/index.html" target="_blank">
                Online
              </a>
            </button>
            <button>Typescript</button>
          </div>
          <img src={Image1} alt="" />
        </div>
        <div className="section4_card">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>
              <a href="./practice/index.html" target="_blank">
                Online
              </a>
            </button>
            <button>Typescript</button>
          </div>
          <img src={Image1} alt="" />
        </div>
        <div className="section4_card">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>
              <a href="./practice_class_room/index.html" target="_blank">
                Online
              </a>
            </button>
            <button>Typescript</button>
          </div>
          <img src={Image1} alt="" />
        </div>
        <div className="section4_card none">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>Online</button>
            <button>Typescript</button>
          </div>
          <img src="./img/image 1.png" alt="" />
        </div>
        <div className="section4_card none">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>Online</button>
            <button>Typescript</button>
          </div>
          <img src="./img/image 1.png" alt="" />
        </div>
        <div className="section4_card none">
          <h2>Move.it</h2>
          <p>
            Приложение Rocketseat NLW#04. Разработано с помощью React. Платформа
            Pomodoro с упражнениями.
          </p>
          <div className="section4_card_buttons">
            <button>Online</button>
            <button>Typescript</button>
          </div>
          <img src="./img/image 1.png" alt="" />
        </div>
      </div>
      <div className="section4Btn">
        <button className="section4_cards_btn" onclick="btnShow()">
          View All
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
