import React from "react";

const StreamerCard = ({ name, status, imgSrc }) => {
  const statusColors = {
    off: "bg-red-500",
    on: "bg-green-500",
    chat: "bg-blue-500",
    private: "bg-purple-500",
    secret: "bg-pink-500",
  };

  return (
    <div className="relative w-40 h-56 bg-gray-800 rounded-lg shadow-lg text-white flex flex-col justify-end">
      <img src={imgSrc} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
      <div className={`absolute top-0 left-0 px-2 py-1 text-xs ${statusColors[status]} rounded-t-lg`}>{status.toUpperCase()}</div>
      <div className="bg-black bg-opacity-50 p-2 rounded-b-lg">{name}</div>
    </div>
  );
};

export default StreamerCard;
