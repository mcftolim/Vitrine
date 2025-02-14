import React from "react";
import Header from "../header";
import FeaturedStreamers from "../featuredStreamers";
import StreamersList from "../streamersList";
import Footer from "../footer";
import "./Main.styles.css";
import { FeaturedStreamer } from "../../types/featuredStreamer";

interface MainProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const Main: React.FC<MainProps> = ({ onShowLogin, onShowRegister }) => {
  // Dados mockados para streamers em destaque
  const featuredStreamers: FeaturedStreamer[] = [
    { 
      userId: "featured1",
      name: "destaque 1", 
      type: "online" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured2",
      name: "destaque 2", 
      type: "chat" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured3",
      name: "destaque 3", 
      type: "private" as const,
      profileImage: "/assets/streamerTest.svg"
    }
  ];

  return (
    <div className="container">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="main-content">
        <h1 className="title">Destaques</h1>
        <FeaturedStreamers streamers={featuredStreamers} />
        <h2 className="subtitle">Streamers</h2>
        <div className="streamers-container">
          <StreamersList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main; 