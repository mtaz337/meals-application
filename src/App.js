import React from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Search from "./components/Search";
import { useGlobalContext } from "./context";
import Modal from "./components/Modal";

function App() {
  const { favorites, showModal } = useGlobalContext();
  const currentYear = new Date().getFullYear();
  
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/mahirtaz/", "_blank");
  };

  return (
    <div className="App">
      <Search />

      {favorites.length > 0 && <Favorites />}

      <Meals />
      {showModal && <Modal />}
      <h4 style={{ textAlign: "center" }}>
        &copy; {currentYear}, All Right Reserved -{" "}
        <a href="#" onClick={openLinkedInProfile}>
          Mahir Tazwar
        </a>
      </h4>
    </div>
  );
}

export default App;
