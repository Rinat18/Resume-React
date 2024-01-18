import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RickandMorty from "./components/RickandMorty";
import CardsDetail from "./components/CardsDetail";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/rickMorty" element={<RickandMorty />} />
      <Route path="/cardsDetail/:id" element={<CardsDetail />} />
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoute;
