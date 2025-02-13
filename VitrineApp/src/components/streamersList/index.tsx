import React from "react";
import StreamerCard from "../streamerCard";

const streamers = [
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
  { name: "Gabriela", status: "off", imgSrc: "/assets/streamerTest.svg" },
];

const StreamersList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-x-8 gap-y-12 p-6 place-items-center w-full max-w-screen-xl mx-auto">
    {streamers.map((streamer, index) => (
      <StreamerCard key={index} {...streamer} />
    ))}
  </div>
);

export default StreamersList;
