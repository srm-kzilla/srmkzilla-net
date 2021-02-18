import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar } from "../shared/components";
import CardProject from "../shared/components/card_projects";
import ProjectIcon from "../shared/components/project_icons";
import pro from "../shared/pro.json";
import cardData from "../shared/test";
import sanityClient from "../shared/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Service from "../shared/components/services";

const projects = () => {
  const [projectData, setProject] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        slug,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>SRMKZILLA | Projects</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <div className="h-screen bg-black-200">
        <Navbar />
      </div>
      <div className="bg-black pt-28">
        <h1 className="text-white text-center text-4xl">Projects</h1>
        <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo
        </p>
        <div className="flex flex-wrap items-center justify-center lg:px-36 md:px-24 px-10 mt-4">
          {projectData &&
            projectData.map(
              (
                project: {
                  title: String;
                  logo: { asset: { url: string | undefined } };
                },
                index: any
              ) => (
                <Link href="/projects/[slug]" as={`/projects/${project.title}`}>
                  <a>
                    <ProjectIcon
                      icon={project.logo.asset.url}
                      title={project.title}
                      upcomming={false}
                    />
                  </a>
                </Link>
              )
            )}
        </div>
        <Service />
      </div>
    </div>
  );
};

export default projects;
