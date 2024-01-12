import { useState } from "react";
import Aboutme from "./components/Aboutme";
import Expirience from "./components/Expirience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homesite from "./components/Homesite";
import Portfolio from "./components/Portfolio";
import Recomendation from "./components/Recomendation";
import Sidebar  from "./components/Sidebar";
import Skills from "./components/Skills";
const App = () => {
  const [none, setNone] = useState('none')
  const Sidebar = () => {
    console.log(13);
  }
  return (
    <div className="body">
      <Sidebar />

      <div className="content">
        <Header sidebar = {Sidebar} />
        <Homesite />
        <Expirience />
        <Aboutme />
        <Portfolio />
        <Skills />
        <Recomendation />
        <Footer />
      </div>
    </div>
  );
};

export default App;
