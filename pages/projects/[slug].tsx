import React from "react";
import { Navbar } from "../../shared/components";
import { useRouter } from "next/router";
import pro from "../../shared/pro.json";
import cardData from "../../shared/test";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";

const Project = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>SRMKZILLA</title>
        <link rel="icon" href="../images/kzillalogo.png" />
      </Head>
      <div className="h-screen">
        <Navbar />
        <img
          className="absolute top-0 right-0 h-screen z-0"
          src="../images/bgpro.png"
          alt=""
        />
        <div className="flex flex-wrap w-screen">
          <div className="z-10 w-2/4 px-24 mt-40">
            <img className="" src="../images/xyz.png" alt="" />
            <h1 className="text-white text-5xl font-semibold mt-10">
              Kzilla.xyz
            </h1>
            <p className="text-white mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-7">
              <button className="px-5 py-3 rounded-full bg-black-200 text-white text-sm">
                View Project
              </button>
              <button className="px-8 ml-3 py-3 rounded-full bg-black-200 text-white text-sm">
                Github
              </button>
            </div>
          </div>
          <div className="z-10 w-2/4 relative">
            <div className="absolute videoCard h-64 z-20 w-2/3 left-2/4 top-2/3 transform -rotate-3 rounded-lg -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bg-white h-64 z-20 w-2/3 left-2/4 top-3/4 transform  rounded-lg -translate-y-36 -translate-x-64 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/sxDqY1myzko"
                height="100%"
                width="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="insta flex flex-wrap">
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Project;
