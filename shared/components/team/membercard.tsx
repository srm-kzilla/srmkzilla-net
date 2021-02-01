import React, { useState } from "react";
import { AlignCenter } from "react-feather";
import Player from "./player";

const MemberCard = (props) => {
  const [cloudShow, setCloudShow] = useState(false);
  return (
    <div className="my-1">
      <div className="relative left-20 ml-12 z-20 top-20 -mt-10">
        <img
          src="/images/cloud.svg"
          alt="cloud"
          className={`${cloudShow ? "block" : "invisible"} w-40 content-center`}
        />
        <p
          className={`${
            cloudShow ? "block" : "invisible"
          } text-black mx-4 mb-3 relative -top-20`}
        >
          Hey! I'm {props.name}.
        </p>
      </div>
      <div
        onMouseOver={() => setCloudShow(!cloudShow)}
        onMouseOut={() => setCloudShow(!cloudShow)}
        className=" hover:bg-black rounded-2xl md:p-3 overflow-hidden mx-auto cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
      >
        <img
          className="w-56 h-56 hover:w-96 object-cover rounded-full md:p-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
          src={props.src}
          alt="avatar"
        />
        {/* <audio controls>
          <source src="/images/music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio> */}
        <div className={`${cloudShow ? "block" : "invisible"}`}>
          <Player url="/images/music.mp3" />
        </div>
        <span
          className={`${
            cloudShow ? "block" : "invisible"
          } text-sm text-gray-100 text-center`}
        >
          {props.designation}
        </span>
      </div>
    </div>
  );
};

export default MemberCard;
