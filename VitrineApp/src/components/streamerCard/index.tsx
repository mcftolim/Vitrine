import React from "react";

const StreamerCard = ({ name, status, imgSrc, highlight }) => (
  <div className={`streamer-card ${highlight ? "highlight" : ""}`}>
    <img src={imgSrc} alt={name} className="streamer-image" />
    <div className={`status ${status}`}>{status.toUpperCase()}</div>
    <div className="name">{name}</div>
  </div>
);

export default StreamerCard;