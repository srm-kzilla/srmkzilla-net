import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

const Success = () => {
  const router = useRouter()
  const { title } = router.query
  return (
    <div className="bg-gray-900 h-screen w-screen overflow-hidden z-30 relative">
      <Head>
        <title>Success</title>
        <meta name="description" content="Success page" />
        <link rel="icon preload canonical" href="./images/kzillalogo.png" />
      </Head>
      <div className="z-30 relative top-60">
        <h1 className="text-center text-white text-5xl mt-16 pb-4 md:text-7xl">Success</h1>

        <p className="text-center text-lg text-white md:text-3xl">
          You have successfully registered for <span className='font-bold'>{decodeURIComponent(title as string)}</span>
        </p>
      </div>
      <img
        src="/images/404bg.png"
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
    </div>
  )
}


export default Success
