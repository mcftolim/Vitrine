import React from "react";
import Header from "../header";
import FeaturedStreamers from "../featuredStreamers";
import StreamersList from "../streamersList";
import Footer from "../Footer";
import "../../index.css";

const Main = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-300">Destaques</h1>
        <FeaturedStreamers />
        <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-gray-400">Streamers</h2>
        <div className="flex justify-center">
          <StreamersList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;