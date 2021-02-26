import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0,
    transition: {
      duration: 5,
    },
  },
}

const Message = (props: { color: String; message: String }) => {
  return (
    <div
      className={`message bg-${props.color} float-right px-6 sm:mr-24 mr-20 py-5 rounded-xl z-10 relative mt-20`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute bg-black-200 h-full w-full top-0 left-0"
      ></motion.div>
      <p>{props.message}</p>
      <motion.img
        className="absolute right-0 transform left-full ml-5 sm:top-5 top-2/4"
        src="./images/messageLogo.png"
        alt="logo"
        draggable={false}
      />
      <motion.div className="absolute border-white w-full h-full top-0 left-0 rounded-xl border transform -translate-y-1 -translate-x-1 z-10"></motion.div>
      <motion.div
        className={`corner h-5 w-6 bg-${props.color} absolute right-0 transform translate-x-2/4 rounded-bl-2xl`}
      >
        <motion.div className="block bg-black-200 h-4 w-3 float-right rounded-bl-xl"></motion.div>
      </motion.div>
    </div>
  )
}

export default Message
