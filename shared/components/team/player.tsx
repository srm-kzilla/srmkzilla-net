import React, { useState, useEffect } from "react";
import { Volume, Volume2 } from "react-feather";

const useAudio = (url) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    setAudio(new Audio(url));
    console.log(audio);
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", () => setPlaying(false));
      }
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
