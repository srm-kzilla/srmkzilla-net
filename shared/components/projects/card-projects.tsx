import React from 'react'
import { motion } from 'framer-motion'

const CardProject = (props: {
  name: String
  image: any
  desc: String
  link: String
}) => {
  return (
    <motion.div
      className="bg-black-200 sm:w-80 w-72 rounded-xl mx-6 p-2 mb-10 shadow-box"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="h-full w-full object-cover rounded-xl overflow-hidden"
        draggable={false}
        src={props.image}
        alt="card-image"
      />

      <h1 className="text-white px-3 text-xl font-medium mt-5">{props.name}</h1>
      <p className="text-white font-light px-3 mt-3 text-xs">{props.desc}</p>
      <div className="text-right mr-5 my-5">
        <a target="_blank" href={`${props.link}`} rel="noopener noreferrer">
          {props.link && (
            <button className="bg-black border rounded-full text-white text-xs px-5 py-1 border-white focus:outline-none">
              Check out
            </button>
          )}
        </a>
      </div>
    </motion.div>
  )
}

export default CardProject
