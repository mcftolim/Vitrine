import React from "react";

const StreamerCard = ({ name, status, imgSrc }) => {
  return (
    <div className="relative w-[140px] sm:w-[160px] h-[180px] sm:h-[230px] bg-gray-800 rounded-lg shadow-lg text-white border-4 border-red-500 flex flex-col justify-between items-center p-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-8 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold text-sm sm:text-base">
        {status.toUpperCase()}
      </div>
      <div className="flex-grow w-full h-full">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="absolute bottom-1 left-1 w-7 h-7 sm:w-9 sm:h-9 border-2 border-white rounded-full overflow-hidden">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center font-semibold py-1">
        {name}
      </div>
    </div>
  );
};


export default StreamerCard;