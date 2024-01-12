import React from "react";
import MyImage from "../img/Фото 21.11.2023, 12.50.jpg"

const Aboutme = () => {
  return (
    <section id="about_me" className="section3">
      <div className="section3_left">
        <img src={MyImage} alt="" />
      </div>
      <div className="section3_right">
        <span>🧐 Обо мне</span>
        <div>Ринат Досматов</div>
        <p>👋 Меня зовут Ринат, но вы можете звать меня просто Рико.</p>
        <p>
          👨‍💻 Более 2 лет занимаюсь разработкой и программированием интерфейсов с
          использованием JavaScript, React JS и Typescript.
        </p>
        <p>🎓 Окончил курсы программирования в Makers напраления Front-end.</p>
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
  );
};

export default Aboutme;
