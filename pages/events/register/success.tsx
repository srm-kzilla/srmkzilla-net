import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Success = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("/events");
    }, 3000);
    return () => clearTimeout(timeout);
  })
  return (
    <div className="bg-gray500 h-screen w-screen overflow-hidden z-30 relative">
      <Head>
        <title>Success</title>
        <meta name="description" content="Success page" />
        <link rel="icon preload canonical" href="./images/kzillalogo.png" />
      </Head>
      <div className="z-30 relative">
        <h1 className="text-center text-white text-4xl mt-16">Success</h1>

        <p className="text-center text-white text-3xl">
          You have successfully registered for the event
        </p>
      </div>
      <img
        src="./images/404bg.png"
        className="z-20 w-full xl:h-auto h-96 object-fill absolute bottom-0 xl:-mb-20 mb-0 left-0"
        alt="background"
      />
      <motion.img
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        transition={{ yoyo: Infinity, duration: 2 }}
        src="./images/404stars.png"
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        alt="stars"
      />
      <div className="absolute z-10 xl:w-5/12 bg w-9/12 top-96 lg:mt-56 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Image height={1000} width={1500} src="/images/err.png" alt="404" />
      </div>
    </div>
  )
}

export default Success
