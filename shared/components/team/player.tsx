import React, { useState, useEffect } from "react";
import { Volume, Volume2 } from "react-feather";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="absolute right-1 mb-5">
      <button onClick={toggle}>
        {playing ? (
          <Volume2 color="white" size={30} className="focus:none" />
        ) : (
          <Volume color="white" size={30} className="focus:none" />
        )}
      </button>
    </div>
  );
};

export default Player;
