import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/Const";
import { Link } from "react-router-dom";

const RickandMorty = () => {
  const [cards, setCards] = useState([]);
  const getCards = async () => {
    const { data } = await axios(API);
    setCards(data.results);
  };
  useEffect(() => {
    getCards();
  }, []);
  console.log(cards);
  return (
    <div className="body">
      <div className="content">
        <div className="titleAPI">Characters</div>
        <div className="wrapp">
          {cards.map((elem) => (
            <Link to={`/cardsDetail/${elem.id}`}>
              <div key={elem.id} className="cardAPI">
                <img className="cardApiImg" src={elem.image} alt="" />
                <div className="cardApiText">
                  <div className="cardApiName">{elem.name}</div>
                  <div className="cardApiStatus">{elem.status}</div>
                  <div className="cardApiSpecies">{elem.species}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RickandMorty;
