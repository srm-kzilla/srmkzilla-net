import React from "react";
import { Navbar } from "../../shared/components";
import { useRouter } from "next/router";
import pro from "../../shared/pro.json";
import cardData from "../../shared/test";
import Head from "next/head";

const Project = () => {
  const router = useRouter();
  const index = Number(router.query.slug);
  const project = cardData[index - 1];
  if (!project) return <p></p>;
  return (
    <div className="bg-black">
      <Head>
        <title>SRMKZILLA | {project.title}</title>
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
            <img className="" src={`.${project.logo}`} alt="" />
            <h1 className="text-white text-5xl font-semibold mt-10">
              {project.title}
            </h1>
            <p className="text-white mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, labore, tenetur fugiat, vitae sapiente veniam nemo
              quia corporis tempore vel ratione modi odit ab architecto quae ea!
              In, est ratione.
            </p>
            <div className="mt-7">
              <button className="px-5 py-3 rounded-full bg-baseBlack text-white text-sm">
                View Project
              </button>
              <button className="px-8 ml-3 py-3 rounded-full bg-baseBlack text-white text-sm">
                Github
              </button>
            </div>
          </div>
          <div className="z-10 w-2/4 relative">
            <div className="absolute h-64 z-20 w-2/3 bg-white left-2/4 top-2/3 transform -rotate-3 rounded-lg -translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
