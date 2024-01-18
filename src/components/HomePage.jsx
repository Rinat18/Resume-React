import React from "react";

import MyImage from "../img/Фото 21.11.2023, 12.50.jpg";
import Codeicon from "../img/CodeIcon.svg";
import ProjectsIcon from "../img/ProjectsIcon.svg";
import DesignIcon from "../img/DesignIcon.svg";

import Linkedin from "../img/linkedin.svg";
import GitHub from "../img/github.svg";

import Geroi from "../img/Group 68.png";
import Download from "../img/ArrowLineDown.svg";
import WhatsApp from "../img/WhatsappLogo.svg";

import DesignIcon2 from "../img/Group 67.svg";
import Image1 from "../img/image 1.png";

import Quotes from "../img/Quotes.png";
import Person from "../img/image 3.png";
import Image2 from "../img/image 2.png";

const HomePage = () => {
  return (
    <body>
      {/* MAIN */}
      <content className="content">
        {/* HOME */}
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
        {/* EXPIRIENCES */}
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
        {/* ABOUT ME */}
        <section id="about_me" className="section3">
          <div className="section3_left">
            <img src={MyImage} alt="" />
          </div>
          <div className="section3_right">
            <span>🧐 Обо мне</span>
            <div>Ринат Досматов</div>
            <p>👋 Меня зовут Ринат, но вы можете звать меня просто Рико.</p>
            <p>
              👨‍💻 Более 2 лет занимаюсь разработкой и программированием
              интерфейсов с использованием JavaScript, React JS и Typescript.
            </p>
            <p>
              🎓 Окончил курсы программирования в Makers напраления Front-end.
            </p>
            <p>
              💡 Интересуюсь фронтенд-разработкой с использованием React, React
              Native, VueJS и UX/UI Design
            </p>
            <p>
              🚀Стараться каждый день испытать свой предел, что бы увеличить его
              растояние.
            </p>
            <p />
          </div>
        </section>
        {/* PORTFOLIO */}
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
                Приложение Rocketseat NLW#04. Разработано с помощью React.
                Платформа Pomodoro с упражнениями.
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
        {/* SKILLS */}
        <section id="skills" className="section5">
          <div className="section5_title">
            <div>Видео проекты</div>
            <p>Всегда полезно знать немного о редактировании</p>
          </div>
          <div className="section5_cards">
            <div className="section5_card">
              <img src={Image2} alt="" />
              <div className="section5_card_desc1">
                <span>Move.it</span>
                <div>
                  <button>React JS</button>
                  <button>React JS</button>
                </div>
              </div>
              <div className="section5_card_desc2">
                <span>Move.it</span>
                <div>Посетить</div>
              </div>
            </div>
            <div className="section5_card">
              <img src={Image2} alt="" />
              <div className="section5_card_desc1">
                <span>Move.it</span>
                <div>
                  <button>React JS</button>
                  <button>React JS</button>
                </div>
              </div>
              <div className="section5_card_desc2">
                <span>Move.it</span>
                <div>Посетить</div>
              </div>
            </div>
            <div className="section5_card">
              <img src={Image2} alt="" />
              <div className="section5_card_desc1">
                <span>Move.it</span>
                <div>
                  <button>React JS</button>
                  <button>React JS</button>
                </div>
              </div>
              <div className="section5_card_desc2">
                <span>Move.it</span>
                <div>Посетить</div>
              </div>
            </div>
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section id="recomendation" className="section6">
          <div className="section5_title">
            <div>💬 Рекомендации</div>
            <p>Рекомендация от курса Makers</p>
          </div>
          <div className="section5_cards">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="section5_card section6_card"
            >
              <img src={Quotes} alt="" />
              <p>
                Ринат всегда учится и учится, стремясь улучшить то, что он
                делает. Это ваше лучшее качество. Он всегда добивается своих
                целей, сосредоточен и организован. Более того, технически то,
                что он намеревается сделать, он делает хорошо. Всегда!
              </p>
              <div className="section6_card_person">
                <img src={Person} alt="" />
                <div>
                  <span>Elmar</span>
                  <p>Treker группы JS37</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="section5_card section6_card"
            >
              <img src={Quotes} alt="" />
              <p>
                Ринат всегда учится и учится, стремясь улучшить то, что он
                делает. Это ваше лучшее качество. Он всегда добивается своих
                целей, сосредоточен и организован. Более того, технически то,
                что он намеревается сделать, он делает хорошо. Всегда!
              </p>
              <div className="section6_card_person">
                <img src={Person} alt="" />
                <div>
                  <span>Diana</span>
                  <p>Treker группы JS37</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="section5_card section6_card"
            >
              <img src={Quotes} alt="" />
              <p>
                Ринат всегда учится и учится, стремясь улучшить то, что он
                делает. Это ваше лучшее качество. Он всегда добивается своих
                целей, сосредоточен и организован. Более того, технически то,
                что он намеревается сделать, он делает хорошо. Всегда!
              </p>
              <div className="section6_card_person">
                <img src={Person} alt="" />
                <div>
                  <span>Adilet</span>
                  <p>Mentor группы JS37</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
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
        {/* END */}
      </content>
      {/* MAIN */}
    </body>
  );
};

export default HomePage;
