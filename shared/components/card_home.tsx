import React from "react";
import { motion } from "framer-motion";

const Card_home = (props: { name: String , image:string, desc: String}) => {
  return (
    <div className="bg-baseBlack sm:w-72 w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10 shadow-box">
      <div className="image h-44 rounded-xl overflow-hidden">
        <img className="w-full" draggable={false} src={props.image} alt="card-image" />
      </div>
      <h1 className="text-white text-center text-xl font-medium mt-5">{props.name}</h1>
      <p className='text-white font-light px-3 mt-3 text-xs'>{props.desc}</p>
      <div className='text-center mt-10 mb-5'><button className='bg-black border rounded-full text-white text-xs px-5 py-1 border-white'> Know More </button></div>
    </div>
  );
};

export default Card_home;
