import React, { useState, useRef, useLayoutEffect } from "react";
import { Navbar } from "../shared/components";
import Card_home from "../shared/components/card_home";
import Message from "../shared/components/Message";
import { InView, useInView } from "react-intersection-observer";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useElementScroll,
} from "framer-motion";

const cardData = [
  { title: "First", image: "" },
  { title: "Second", image: "" },
  { title: "third", image: "" },
];

const Home = () => {
  return (
    <div className="bg-black">
      <section className="hero h-screen bg-black overflow-hidden relative">
        <Navbar />
        <div>
          <div className="relative sm:h-64 h-52 md:mt-36 sm:mt-24 mt-20">
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
          <h1 className="text-white text-center text-4xl">What's New</h1>
          <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
            {cardData.map((card) => (
              <Card_home name={card.title} />
            ))}
          </div>
        </div>
      </section>
      {/* New section ends */}

      {/* {Process aection starts} */}
      <section className="process bg-baseBlack pt-10 min-h-screen lg:px-40 md:px-32 px-10">
        <div>
          <h1 className="text-white text-center text-4xl">How we work</h1>
          <div>
            <Message color="baseBlue" />
          </div>
        </div>

        {/* ideation */}

        <div className="flex flex-wrap w-full">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <h1 className="text-white text-3xl mt-24">
              Ideation<span className="text-orange600 text-4xl">.</span>
            </h1>
            <p className="text-white text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
              labore dolorem, debitis id eum cum adipisci impedit quos mollitia
              earum, voluptate natus. Voluptas.
            </p>
            <img
              src="./images/bulb.png"
              className="h-96 w-auto lg:block hidden"
              alt=""
            />
          </div>
          <div className="lg:mt-52 mt-24 mx-auto">
            <div className="relative video transform -rotate-6 bg-orange300 md:w-72 md:h-72 sm:h-64 sm:w-64 h-52 w-52 items-center rounded-2xl z-100">
              <div className="absolute h-full w-full transform rotate-6 bg-white -top-8 left-6 rounded-2xl"></div>
            </div>
          </div>
        </div>
        {/* ideation end */}

        {/* design */}
        <div className="lg:-mt-16 sm:mt-24 mt-14">
          <Message color="baseBlue" />
        </div>
        <div className="flex flex-wrap w-full">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <div className="lg:mt-auto mt-24">
              <span className="text-white text-3xl relative lg:mt-24">
                Design<span className="text-orange600 text-4xl">.</span>{" "}
                <img
                  src="./images/arrow.png"
                  className="absolute top-full left-full h-5 transform -translate-y-2"
                  alt=""
                />{" "}
              </span>
            </div>

            <p className="text-white text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
              labore dolorem, debitis id eum cum adipisci impedit quos mollitia
              earum, voluptate natus. Voluptas.
            </p>
            <img
              src="./images/design1.png"
              className="w-72 lg:ml-16 mt-16 mx-auto"
              alt=""
            />
          </div>
          <div className="mt-32 lg:block hidden">
            <img
              className="w-96 h-auto xl:ml-16 ml-10 mt-16 border-orange600 border-8 rounded-2xl"
              src="./images/design2.png"
              alt="design"
            />
          </div>
        </div>
        {/* design end */}

        <div className="lg:mt-auto sm:mt-16 mt-10">
          <Message color="orange300" />
        </div>
        <div className="flex flex-wrap w-full -mt-10">
          <div className="xl:w-3/6 lg:w-2/5 w-auto">
            <h1 className="text-white text-3xl mt-24">
              Technical<span className="text-orange600 text-4xl">.</span>
            </h1>
            <p className="text-white text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
              labore dolorem, debitis id eum cum adipisci impedit quos mollitia
              earum, voluptate natus. Voluptas.
            </p>
            <p className="text-white text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
              labore dolorem, debitis id eum cum adipisci impedit quos mollitia
              earum, voluptate natus. Voluptas.
            </p>
            <p className="text-white text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque,
              labore dolorem, debitis id eum cum adipisci impedit quos mollitia
              earum, voluptate natus. Voluptas.
            </p>
          </div>
          <div className="lg:mt-24 mt-0">
            <img
              src="./images/tech.png"
              className="w-96 lg:ml-24 mx-auto lg:mt-24 mt-16"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Process section ends */}
    </div>
  );
};

export default Home;
