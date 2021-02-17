import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar } from "../shared/components";
import CardProject from "../shared/components/card_projects";
import ProjectIcon from "../shared/components/project_icons";
import pro from "../shared/pro.json";
import cardData from "../shared/test";
import sanityClient from "../shared/client"
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

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

  const [projectData, setProject] = useState(null)
  useEffect(()=>{
    sanityClient
      .fetch(`*[_type == "project"]{
        title,
        slug,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data)=> setProject(data))
      .catch(console.error)
  }, []);
    
  return (
    <div>
     {console.log(projectData)}
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
        <div className="flex flex-wrap items-center justify-center lg:px-36 md:px-24 px-10 mt-4">
          
          {projectData && projectData.map((project: { title: String; logo: { asset: { url: string | undefined; }; }; }, index: any) => (
            <Link href="/projects/[slug]" as={`/projects/${project.title}`}>
              <a>
                <ProjectIcon
                  icon={project.logo.asset.url}
                  title={project.title}
                  upcomming={false}
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
