import React from "react";
import Quotes from "../img/Quotes.png";
import Person from "../img/image 3.png";

const Recomendation = () => {
  return (
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
            Ринат всегда учится и учится, стремясь улучшить то, что он делает.
            Это ваше лучшее качество. Он всегда добивается своих целей,
            сосредоточен и организован. Более того, технически то, что он
            намеревается сделать, он делает хорошо. Всегда!
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
            Ринат всегда учится и учится, стремясь улучшить то, что он делает.
            Это ваше лучшее качество. Он всегда добивается своих целей,
            сосредоточен и организован. Более того, технически то, что он
            намеревается сделать, он делает хорошо. Всегда!
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
            Ринат всегда учится и учится, стремясь улучшить то, что он делает.
            Это ваше лучшее качество. Он всегда добивается своих целей,
            сосредоточен и организован. Более того, технически то, что он
            намеревается сделать, он делает хорошо. Всегда!
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
  );
};

export default Recomendation;
