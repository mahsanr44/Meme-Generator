import React from "react";
import MemeImg from "./../Images/meme.png";
const Meme = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        <img src={MemeImg} alt="Meme" />
        <span className="absolute font-bold text-white text-4xl font-serif mt-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Shut up</span>
        <span className="absolute font-bold text-white text-4xl font-serif mt-52 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">and take my money</span>
        
      </div>
    </div>
  );
};

export default Meme;
