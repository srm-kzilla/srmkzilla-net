import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {
  content: {
    name: string
    description_1: string
    description_2: string
    description_3: string
  }
}

const SwipeCard = ({ content }: Props) => {
  const [styleX, setStyleX] = useState(0)
  const [styleY, setStyleY] = useState(0)
  const [rotate, setRotate] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const [styleX1, setStyleX1] = useState(0)
  const [styleY1, setStyleY1] = useState(0)
  const [rotate1, setRotate1] = useState(0)
  const [opacity1, setOpacity1] = useState(1)
  function onTap1(event: any) {
    setStyleX1(300)
    setRotate1(5)
    setStyleY1(-100)
    setOpacity1(0)
  }
  function onTap(event: any) {
    setStyleX(300)
    setRotate(5)
    setStyleY(100)
    setOpacity(0)
  }
  return (
    <div className="bg-black-200 mx-12 relative h-80 w-64 rounded-xl my-5 py-5 px-5">
      {console.log(content)}
      <h1 className="text-white text-2xl text-center mt-2">{content.name}</h1>
      <p className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-sm text-white px-6 text-center">
        {content.description_1}
      </p>
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={{ x: styleX1, rotate: rotate1, opacity: opacity1, y: styleY1 }}
        transition={{ duration: 1, opacity: { delay: 0.6 } }}
        onTap={onTap1}
        className="absolute p-5 h-full w-full rounded-xl bg-black-200 top-0 left-0"
      >
        <div className="w-8 h-8 rounded-full border border-white absolute bottom-7 cursor-pointer right-7">
          <div className="h-full w-full relative">
            <BsArrowRightShort className="absolute text-white text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <h1 className="text-white text-2xl text-center mt-2">{content.name}</h1>
        <p className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-sm text-white px-6 text-center">
          {content.description_2}
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={{ x: styleX, rotate: rotate, opacity: opacity, y: styleY }}
        transition={{ duration: 1, opacity: { delay: 0.6 } }}
        onTap={onTap}
        className="p-5 absolute h-full w-full rounded-xl bg-black-200 top-0 left-0"
      >
        <div className="w-8 h-8 rounded-full border border-white absolute bottom-7 cursor-pointer right-7">
          <div className="h-full w-full relative ">
            <BsArrowRightShort className="absolute text-white text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <h1 className="text-white text-2xl text-center mt-2">{content.name}</h1>
        <p className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-sm text-white px-6 text-center">
          {content.description_3}
        </p>
      </motion.div>
    </div>
  )
}

export default SwipeCard