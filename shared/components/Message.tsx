import React from "react";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

const Message = (props: { color: String }) => {
  return (
    <div
      className={`message bg-${props.color} float-right px-6 sm:mr-24 mr-20 py-5 rounded-xl z-10 relative mt-20`}
    >
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <img
        className="absolute right-0 transform left-full ml-5 sm:top-5 top-2/4"
        src="./images/messageLogo.png"
        alt="logo"
      />
      <div className="absolute border-white w-full h-full top-0 left-0 rounded-xl border transform -translate-y-1 -translate-x-1 z-10"></div>
      <div
        className={`corner h-5 w-6 bg-${props.color} absolute right-0 transform translate-x-2/4 rounded-bl-2xl`}
      >
        <div className="block bg-baseBlack h-4 w-3 float-right rounded-bl-xl"></div>
      </div>
    </div>
  );
};

export default Message;
