//

import React from 'react'
import Head from 'next/head'
import Footer from '../footer'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Stats from './numbers'
import Navbar from '../navbar'
import { ServicesProvided, Collaborate, Testimonals } from './services'
const Services = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div>
      <Head>
        <title>SRMKZILLA | Services</title>
      </Head>
      <Navbar />
      <div className="h-screen bg-black-200 bg-light bg-fixed md:pt-40 pt-28 overflow-hidden px-5">
        <h1 className="text-center text-white font-medium text-6xl md:text-7xl relative z-30 hidden md:block">
          Our Services
        </h1>
        <div className="bg-orange300 w-64 md:h-12 h-8 mx-auto -mt-5 md:-mt-8 hidden md:block"></div>
        <motion.div
          style={{ scale }}
          className=" md:block hidden relative box w-9/12 h-96 mt-24 mx-auto rounded-3xl border-black-100 border-8"
        >
          <div className="flex ml-10 mt-8">
            <div className="bg-orange600 h-5 w-5 rounded-full"></div>
            <div className="bg-logoGreen h-5 w-5 rounded-full mx-5"></div>
            <div className="bg-logoBlue h-5 w-5 rounded-full"></div>
          </div>
          <div className="w-11/12 mx-auto h-1 my-5 bg-black-100"></div>
          <h1 className="text-center services_text text-xl md:text-4xl mt-20 font-bold">
            <span>
              We Design <span className="md:text-7xl text-xl">.</span> We
              Develop <span className="md:text-7xl text-xl">.</span> We Deliver
            </span>
          </h1>
        </motion.div>
        <img
          src="./images/logowhite.png"
          className="w-48 mt-16 md:hidden block mx-auto my-20"
          alt="logo"
        />
        <h1 className="text-center text-white font-medium text-6xl md:text-7xl relative z-30 md:hidden block">
          Our Services
        </h1>
        <div className="bg-orange300 w-64 md:h-12 h-8 mx-auto -mt-5 md:-mt-8 md:hidden block"></div>
      </div>
      <div className="bg-black overflow-hidden px-3">
        {/* Services Provided section starts*/}
        <section className="my-20 lg:my-24 mx-3 lg:mx-24">
          <div className="flex flex-col place-items-center">
            <ServicesProvided />
          </div>
        </section>
        {/* Services Provided section ends*/}

        {/* Collaborate&numbers section starts*/}
        <section className="min-h-screen my-3 lg:my-10  mx-3 lg:mx-10">
          <div className="flex flex-col place-items-center">
            <div className="text-gray-100 pb-10 mb-10 container">
              <h1 className="text-4xl font-semibold text-gray-100 text-center mb-5">
                Let’s talk numbers
              </h1>
              <h3 className="text-xl  text-gray-100 text-center mb-10">
                Producing Quality. Delivering Finest.
              </h3>
              {/* <Numbers /> */}
              <Stats />
            </div>

            <div className="text-gray-100 pb-10">
              <h1 className="text-4xl font-semibold text-center">
                Collaborate with us
              </h1>
            </div>
            <div className="xl:px-16">
              <Collaborate />
            </div>
          </div>
        </section>
        {/* Collaborate&numbers section ends*/}

        {/* Testimonals section starts*/}
        <section className="min-h-screen my-5 lg:my-10 mx-3 lg:mx-10">
          <div className="flex flex-col place-items-center">
            <div className="text-gray-100 pb-10">
              <h1 className="text-4xl font-semibold text-center mb-5">
                Our website delivers
              </h1>
              <h3 className="text-xl text-center">
                Don’t take our word for it
              </h3>
            </div>
            <div>
              <Testimonals />
            </div>
          </div>
        </section>
        {/* Testimonals section ends*/}
      </div>
      <Footer />
    </div>
  )
}

export default Services
