import React from "react";
import StreamerCard from "../streamerCard";

const streamers = [
  { name: "Gabriela", status: "off", imgSrc: "/images/gabriela.png" },
  { name: "Jhulie", status: "off", imgSrc: "/images/jhulie.png" },
  { name: "Juju", status: "off", imgSrc: "/images/juju.png" },
  { name: "testeTeste", status: "off", imgSrc: "/images/testeTeste.png" }
];

const StreamersList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
    {streamers.map((streamer, index) => (
      <StreamerCard highlight={undefined} key={index} {...streamer} />
    ))}
  </div>
);

export default StreamersList;