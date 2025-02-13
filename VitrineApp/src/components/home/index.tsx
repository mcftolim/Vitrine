import React from "react";
import Main from "../main";

const Home = ({ onShowLogin, onShowRegister }) => {
  return <Main onShowLogin={onShowLogin} onShowRegister={onShowRegister} />;
};

export default Home;
