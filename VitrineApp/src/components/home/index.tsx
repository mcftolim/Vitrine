import React, { useState } from 'react';
import './Home.styles.css';
import Header from '../header';
import StreamerCard from '../streamerCard';
import Login from '../login';
import Register from '../register';
import { Streamer } from '../../types/streamer';
import { FeaturedStreamer as IFeaturedStreamer } from '../../types/featuredStreamer';
import FeaturedStreamers from '../featuredStreamers';
import Footer from '../footer';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Dados mockados para streamers em destaque
  const featuredStreamers: IFeaturedStreamer[] = [
    { 
      userId: "featured1",
      name: "Streamer Destaque 1", 
      type: "online" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured2",
      name: "Streamer Destaque 2", 
      type: "chat" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    { 
      userId: "featured3",
      name: "Streamer Destaque 3", 
      type: "private" as const,
      profileImage: "/assets/streamerTest.svg"
    }
  ];

  // Dados mockados para streamers normais
  const streamers: Streamer[] = [
    { 
      userId: "1",
      name: "NOME", 
      type: "offline" as const,
      profileImage: "/assets/streamerTest.svg"
    },
    {
      userId: "2",
      name: "NOME",
      type: "offline" as const,
      profileImage: "/assets/streamerTest.svg",
      coverImage: "/assets/streamerCover.jpg"
    },
    {
      userId: "3",
      name: "NOME",
      type: "chat" as const,
      profileImage: "/assets/streamerTest.svg",
      coverImage: "/assets/streamerCover.jpg"
    },
    {
      userId: "4",
      name: "NOME",
      type: "private" as const,
      profileImage: "/assets/streamerTest.svg",
      coverImage: "/assets/streamerCover.jpg"
    },
    {
      userId: "5",
      name: "NOME",
      type: "secret" as const,
      profileImage: "/assets/streamerTest.svg",
      coverImage: "/assets/streamerCover.jpg"
    }
  ];

  return (
    <div className="container">
      <Header 
        onShowLogin={() => setShowLogin(true)}
        onShowRegister={() => setShowRegister(true)}
      />
      
      <main className="home">
        <FeaturedStreamers streamers={featuredStreamers} />
        
        <section className="section">
          <h1 className="title">STREAMERS</h1>
          <hr />
          <div className="streamers">
            {streamers.map((streamer) => (
              <StreamerCard 
                key={streamer.userId}
                streamer={streamer}
                status={streamer.type}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default Home; 