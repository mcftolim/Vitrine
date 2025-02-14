import React from "react";
import StreamerCard from "../streamerCard";
import { Streamer } from "../../types/streamer";

// Definindo os streamers com o tipo correto
const streamers: Streamer[] = [
  { 
    userId: "1",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "2",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "3",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "4",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "5",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "6",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "7",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "8",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "9",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
  { 
    userId: "10",
    name: "Gabriela", 
    type: "offline", 
    profileImage: "/assets/streamerTest.svg" 
  },
];

const StreamersList = () => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 p-4 w-full max-w-[2000px] mx-auto overflow-hidden">
    {streamers.map((streamer) => (
      <StreamerCard 
        key={streamer.userId}
        streamer={streamer}
        status={streamer.type}
      />
    ))}
  </div>
);

export default StreamersList;