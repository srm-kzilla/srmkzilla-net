import React from 'react'
import { motion } from 'framer-motion'

const Error = () => {
  return (
    <div className="bg-bg404 h-screen w-screen overflow-hidden z-30 relative">
      <div className="z-30 relative">
        <h1 className="text-center text-white text-4xl mt-16">Oops..</h1>

        <p className="text-center text-white text-3xl">
          Looks like you're lost
        </p>
        <a href="/">
          <h1 className="text-center text-white text-xl font-medium mt-4 cursor-pointer transform transition-transform duration-175 hover:-translate-y-1">
            back to home
          </h1>
        </a>
      </div>
      <img
        src="./images/404bg.png"
        className="z-20 w-auto xl:h-auto h-96 object-fill absolute bottom-0 xl:-mb-20 mb-0 left-0"
        alt=""
      />
      <motion.img
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        transition={{ yoyo: Infinity, duration: 2 }}
        src="./images/404stars.png"
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        alt=""
      />
      <img
        className="absolute z-10 xl:w-5/12 w-9/12 top-96 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        src="./images/err.png"
        alt=""
      />
    </div>
  )
}

export default Error
