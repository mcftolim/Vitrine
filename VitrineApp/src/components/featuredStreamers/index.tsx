import React from "react";
import StreamerCard from "../StreamerCard";

const featured = [{ name: "Liz", status: "off", imgSrc: "/images/liz.png" }];

const FeaturedStreamers = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {featured.map((streamer, index) => (
      <StreamerCard key={index} {...streamer} />
    ))}
  </div>
);

export default FeaturedStreamers;
