import React from 'react'
import Image2 from "../img/image 2.png"

const Skills = () => {
  return (
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

  )
}

export default Skills
