import React from "react";
import { motion } from "framer-motion";

const Card_home = (props: { name: String , image:string}) => {
  return (
    <div className="bg-black sm:w-72 h-72 w-64 rounded-xl xl:mx-12 mx-6 p-2 mb-10">
      <div className="image h-5/6 rounded-t-lg overflow-hidden">
        <img className="w-full" src={props.image} alt="card-image" />
      </div>
      <h1 className="text-white text-center text-xl mt-3">{props.name}</h1>
    </div>
  );
};

export default Card_home;