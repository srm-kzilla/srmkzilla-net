import React, { useState, useRef, useLayoutEffect } from "react";
import { Navbar } from "../shared/components";
import Card_home from "../shared/components/card_home";
import Message from "../shared/components/Message";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Head from "next/head";
import { InView, useInView } from "react-intersection-observer";
import {
  animate,
  AnimatePresence,
  motion,
  useAnimation,
  useElementScroll,
} from "framer-motion";


const cardData = [
  { title: "First", image: "./images/testImage.png", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti' },
  { title: "Second", image: "./images/testImage.png", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti' },
  { title: "third", image: "./images/testImage.png", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti' },
];

const container = {
  hidden: { x:0, y:0},
  show: {
    x:-50,
    y:[5,10,5,0,-5,-10,-5,0,5,10,5,10,20],
    transition: {
        yoyo: Infinity,
        duration: 3,
    }
  },
  showAfter:{
    x:10,
    y:[2,3,4,3,2,0,-2,-3,-4,-2],
    transition: {
        yoyo: Infinity,
        duration: 2,
    }
  },
  showBefore:{
    x:60,
    y:[2,3,4,3,2,0,-2,-3,-4,-2],
    transition: {
        yoyo: Infinity,
        duration: 2,
    }
  },
  showNew:{
    x:-100,
    y:[2,3,4,3,2,0,-2,-3,-4,-2],
    transition: {
        yoyo: Infinity,
        duration: 2,
    }
  }
}


const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>SRMKZILLA</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>

      <section className="hero h-screen bg-hero-pattern bg-fixed overflow-hidden relative">
        <Navbar />
        <div className='absolute top-2/4 transform -translate-y-1/2'>
          <div className="relative sm:h-64 h-52">
            <video
              autoPlay
              loop
              className="sm:h-64 h-52 absolute left-2/4 transform -translate-x-1/2"
              src="./images/hero_logo.mp4"
            ></video>
          </div>
          <div className="lg:px-60 sm:px-32 px-10">
            <h1 className="text-center text-white sm:text-5xl text-4xl sm:mt-auto mt-5 font-bold">
              The campus club you love
            </h1>
            <p className="text-white opacity-25 text-center text-2xl mt-6">
              delectus quia adipisci amet suscipit error eveniet perspiciatis
              eius pariatur, aspernatur ullam. Ipsa, dolores?
            </p>
          </div>
        </div>
      </section>

      {/* New Section start */}
      <section className="works">
        <div className="bg-baseBlack sm:pt-32 pt-24">
          <Fade bottom>
            <h1 className="text-white text-center text-4xl">What's New</h1>
          </Fade>
          <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
            {cardData.map((card) => (
              <Fade bottom>
                <Card_home name={card.title} image={card.image} desc={card.desc} />
              </Fade>
            ))}
          </div>
        </div>
      </section>
      {/* New section ends */}

      {/* {Process aection starts} */}
      <section className="process bg-baseBlack pt-10 min-h-screen lg:px-40 md:px-32 px-10">
        <div>
          <Fade bottom>
            <h1 className="text-white text-center text-4xl">How we work</h1>
          </Fade>
          <div>
            <Bounce delay={[500]}>
              <Message color="baseBlue" />
            </Bounce>
          </div>
        </div>

        {/* ideation */}
        {/*  */}
        <div className="flex flex-wrap w-full mt relative">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <Fade bottom>
              <h1 className="text-white text-3xl lg:mt-5 mt-16">
                Ideation<span className="text-orange600 text-4xl">.</span>
              </h1>

              <p className="text-white text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
                labore dolorem, debitis id eum cum adipisci impedit quos
                mollitia earum, voluptate natus. Voluptas.
              </p>
              <img
                src="./images/bulb.png"
                className="w-5/6 h-auto z-10 -ml-16 -mt-10 lg:block hidden relative"
                draggable="false"
                alt=""
              />
            </Fade>
          </div>
          <Fade bottom>
            <div className="lg:mt-52 mt-24 mx-auto z-30">
              <div className="relative video transform -rotate-6 bg-orange300 md:w-72 md:h-72 sm:h-64 sm:w-64 h-52 w-52 items-center rounded-2xl z-40">
                <div className="absolute h-full w-full transform rotate-6 bg-white -top-8 left-6 rounded-2xl"></div>
              </div>
            </div>
          </Fade>

          {/* svg */}

          <motion.svg className='absolute top-2/3 -mt-28 z-0' width="1007" height="400" viewBox="0 0 1007 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle variants={container} initial="hide" animate="show" cx="857" cy="150" r="149.5" stroke="#FFFBFB"/>
            <motion.path variants={container} initial="hide" animate="show" d="M951 72.5C965.5 92.8333 988.4 146 964 196" stroke="#FFFBFB" stroke-linejoin="round"/>
            <motion.path variants={container} initial="hide" animate="show" d="M956 210C953.989 214.469 947.974 223.527 940 224" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="858" cy="228" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showAfter" cx="191" cy="190" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="65" cy="204" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showNew" cx="689.5" cy="234.5" r="17" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showBefore" cx="17.5" cy="259.5" r="17" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="125.5" cy="227.5" r="17" stroke="#FFFBFB"/>
          </motion.svg>



          {/* bubble end */}
        </div>
        {/* ideation end */}

        {/* design */}
        <Fade right>
          <div className="lg:mt-0 sm:mt-24 mt-14">
            <Message color="baseBlue" />
          </div>
        </Fade>
        <div className="flex flex-wrap w-full mt-52 relative">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <Slide right delay={[500]}>
              <div className="lg:-mt-20 mt-16">
                <span className="text-white text-3xl relative lg:mt-24">
                  Design<span className="text-orange600 text-4xl">.</span>
                  <img
                    src="./images/arrow.png"
                    className="absolute top-full left-full h-5 transform -translate-y-2"
                    alt=""
                  />
                </span>
              </div>
            </Slide>

            <Fade bottom>
              <p className="text-white text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
                labore dolorem, debitis id eum cum adipisci impedit quos
                mollitia earum, voluptate natus. Voluptas.
              </p>
              <video
                src="./images/new.mp4"
                className="w-72 lg:ml-16 mt-16 mx-auto"
                autoPlay
                loop
              />
            </Fade>
          </div>
          <div className="mt-32 lg:block hidden z-20">
            <Fade bottom>
              <img
                className="w-96 z-30 h-auto xl:ml-16 ml-10 mt-0 border-orange600 border-8 rounded-2xl"
                src="./images/design2.png"
                alt="design"
              />
            </Fade>
          </div>
          <motion.svg className='absolute top-2/3 -mt-28 z-0' width="1007" height="400" viewBox="0 0 1007 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle variants={container} initial="hide" animate="show" cx="857" cy="150" r="149.5" stroke="#FFFBFB"/>
            <motion.path variants={container} initial="hide" animate="show" d="M951 72.5C965.5 92.8333 988.4 146 964 196" stroke="#FFFBFB" stroke-linejoin="round"/>
            <motion.path variants={container} initial="hide" animate="show" d="M956 210C953.989 214.469 947.974 223.527 940 224" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="858" cy="228" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showAfter" cx="191" cy="190" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="65" cy="204" r="10.5" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showNew" cx="689.5" cy="234.5" r="17" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="showBefore" cx="17.5" cy="259.5" r="17" stroke="#FFFBFB"/>
            <motion.circle variants={container} initial="hide" animate="show" cx="125.5" cy="227.5" r="17" stroke="#FFFBFB"/>
          </motion.svg>
        </div>
        {/* design end */}

        <div className="lg:mt-auto sm:mt-16 mt-10">
          <Fade right>
            <Message color="orange300" />
          </Fade>
        </div>
        <div className="flex flex-wrap w-full -mt-10">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <Fade bottom>
              <h1 className="text-white text-3xl mt-16">
                Technical<span className="text-orange600 text-4xl">.</span>
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-white text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
                labore dolorem, debitis id eum cum adipisci impedit quos
                mollitia earum, voluptate natus. Voluptas.
              </p>
            </Fade>
            <Fade bottom>
              <p className="text-white text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
                labore dolorem, debitis id eum cum adipisci impedit quos
                mollitia earum, voluptate natus. Voluptas.
              </p>
            </Fade>
            <Fade bottom>
              <p className="text-white text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
                labore dolorem, debitis id eum cum adipisci impedit quos
                mollitia earum, voluptate natus. Voluptas.
              </p>
            </Fade>
          </div>
          <div className="lg:mt-24 mx-auto mt-0">
            <Fade bottom>
              <img
                src="./images/tech.png"
                className="w-96 lg:ml-24 lg:mt-24 mt-16"
                alt=""
              />
            </Fade>
          </div>
        </div>
      </section>
      {/* Process section ends */}
    </div>
  );
};

export default Home;
