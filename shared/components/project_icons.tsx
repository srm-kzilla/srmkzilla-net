import React from "react";
import { motion } from "framer-motion";
import Card_home from "./card_home";
import { IoMdLock } from "react-icons/io";

const ProjectIcon = (props: {
  icon: string | undefined;
  title: String;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}

      className="bg-black-200 h-28 group w-28 sm:mx-16 mx-8 mt-20 rounded-full relative hover:shadow-icon cursor-pointer"
    >
      <img
        src={props.icon}
        className="absolute w-3/5 h-3/5 left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity rounded-lg left-3/4 -mt-14">
      

          <div className="text-white text-lg bg-black-200 rounded-lg px-3 py-1 relative">
            {props.title}
            <div className="absolute left-2">
              {" "}
              <img src="./images/tri.png" className="w-5" alt="" />
            </div>
          </div>
      
      </div>
      
    </motion.div>
  );
};

export default ProjectIcon;
