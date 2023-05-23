import React, { useEffect, useState } from "react";
import MemeImg from "./../Images/meme.png";
const Hero = () => {
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "and take your money",
    memeImg: MemeImg,
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    getMemes();

    return () => {};
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeImgUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImg: memeImgUrl,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="flex py-8 justify-center ">
        <input
          onChange={handleChange}
          value={meme.topText}
          placeholder="Shut up"
          name="topText"
          type="text"
          className="border-[1px] md:mx-1   border-gray-500 py-2 md:px-4 pl-2 rounded-md"
        />
        <input
          onChange={handleChange}
          value={meme.bottomText}
          placeholder="and take my money"
          name="bottomText"
          type="text"
          className="border-[1px] md:mx-1 pl-2 border-gray-500 md:px-4 py-2 rounded-md"
        />
      </div>
      <div className="flex text-white font-semibold bg-[#A818DA] mx-12 md:mx-48 lg:mx-96 p-3 rounded-sm justify-center">
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="flex justify-center py-10">
        <img src={meme.memeImg} width={600} alt="Meme" />
        <span className="absolute font-bold text-white text-4xl font-serif mt-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          {meme.topText}
        </span>
        <span className="absolute font-bold text-white text-4xl font-serif mt-60 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          {meme.bottomText}
        </span>
      </div>
    </div>
  );
};

export default Hero;
