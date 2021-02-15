import React from "react";
import { motion } from "framer-motion";

const CardProject = (props: { name: String; image: string; desc: String }) => {
  return (
    <motion.div
      className="bg-baseBlack sm:w-80 w-72 rounded-xl mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      <div className="image h-52 rounded-xl overflow-hidden">
        <img
          className="w-full"
          draggable={false}
          src={props.image}
          alt="card-image"
        />
      </div>
      <h1 className="text-white px-3 text-xl font-medium mt-5">{props.name}</h1>
      <p className="text-white font-light px-3 mt-3 text-xs">{props.desc}</p>
      <div className="text-right mr-5 my-5">
        <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white">
          Know More
        </button>
      </div>
    </motion.div>
  );
};

export default CardProject;
