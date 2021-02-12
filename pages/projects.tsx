import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Navbar } from "../shared/components";
import CardProject from "../shared/components/card_projects";
import ProjectIcon from "../shared/components/project_icons";
import pro from "../shared/pro.json";
import cardData from "../shared/test";

const serviceData = [
  {
    title: "First",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
  {
    title: "Second",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
  {
    title: "third",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
];

const projects = () => {
  return (
    <div>
      <Head>
        <title>SRMKZILLA | Projects</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <div className="h-screen bg-baseBlack">
        <Navbar />
      </div>
      <div className="bg-black pt-28">
        <h1 className="text-white text-center text-4xl">Projects</h1>
        <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo
        </p>
        {/* <div className="flex flex-wrap items-center justify-center lg:px-36 md:px-24 px-10 mt-4">
          {Object.entries(pro).map((card) => (
            <Link href='/projects/[slug]' as={`/projects/${card[1].title}`}><a><ProjectIcon
              icon={card[1].logo}
              title={card[1].title}
              upcomming={card[1].new}
            /></a></Link>
          ))}
        </div> */}
        <div className="flex flex-wrap items-center justify-center lg:px-36 md:px-24 px-10 mt-4">
          {cardData.map((card) => (
            <Link href="/projects/[slug]" as={`/projects/${card.id}`}>
              <a>
                <ProjectIcon
                  icon={card.logo}
                  title={card.title}
                  upcomming={card.new}
                />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-36">
          <h1 className="text-white text-center text-4xl">Services</h1>
          <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
            Projects that we have done for others
          </p>
          <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
            {serviceData.map((card) => (
              <CardProject
                name={card.title}
                image={card.image}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
