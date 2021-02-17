import React from "react";
import { Navbar } from "../../shared/components";
import { useRouter } from "next/router";
import pro from "../../shared/pro.json";
import cardData from "../../shared/test";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import InstagramEmbed from "react-instagram-embed";
import Tilt from "react-parallax-tilt";

const Project = ({title, desc, link, image, features, instagram, youtube}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: '4orhaocq',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

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
        <div className="flex flex-wrap w-screen items-center content-center">
          <div className="z-10 lg:w-2/4 sm:px-24 px-12 sm:mt-40 mt-20 mx-auto">
             {imageUrl && <img className="lg:relative lg:mx-0 mx-auto" src={imageUrl} />}
            <h1 className="text-white text-5xl lg:text-left text-center font-semibold mt-10">
              {title}
            </h1>
            <p className="text-white lg:text-left text-center mt-4">
              {desc}
            </p>
            <div className="mt-7 lg:text-left text-center">
              <button className="px-5 py-3 rounded-full bg-baseBlack text-white text-sm mb-5">
                View Project
              </button>
              <button className="px-8 ml-3 py-3 rounded-full bg-baseBlack text-white text-sm">
                Github
              </button>
            </div>
          </div>
          <div className="z-10 lg:w-2/4 sm:w-3/4 w-full relative lg:mx-0 transform lg:translate-x-0 sm:translate-x-5 translate-x-0 mt-44 lg:mt-44 mx-auto">
            <div className="absolute videoCard h-64 z-0 w-2/3 left-2/4 top-2/3 transform -rotate-3 rounded-lg sm:block hidden -translate-y-1/2 -translate-x-1/2"></div>
            <Tilt>
              <div className="absolute bg-white sm:h-64 h-56 z-20 sm:w-2/3 w-3/4 sm:mx-auto left-2/4 top-3/4 transform  rounded-lg -translate-y-36 sm:-translate-x-64  -translate-x-1/2 overflow-hidden">
              <iframe width="100%" height="100%" src={youtube} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <section>
        <div className="insta w-screen flex sm:px-24 px-8 lg:mt-auto sm:mt-24 items-center flex-wrap-reverse">
          <div className="lg:w-2/4 sm:w-96 w-full h-96 relative mx-auto">
            <div className=" absolute overflow-hidden sm:w-96 w-full sm:h-96 h-72 lg:right-16 right-auto top-2/3 transform -translate-y-2/3 lg:mt-0 sm:mt-20 mt-0 rounded-xl">
              <div className="">
                <InstagramEmbed
                  url={instagram}
                  clientAccessToken="704509423574860|d6698d49ebaef9f1a2de687b73b3bcd5"
                  className="absolute w-full -top-12 transform -translate-y-1"
                  hideCaption={true}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 lg:mt-0 sm:mt-64 mt-44 w-full">
            <div className="xl:w-4/5 lg:w-5/6 w-full mr-auto sm:mt-0 mt-20 py-10 sm:px-10 px-5 rounded-xl whatitdoes">
              <h1 className="text-white text-3xl mb-5 font-medium text-center">
                What it does
              </h1>
              <p className="text-white font-light">
                {features && <BlockContent blocks={features} />}
               
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        
      </div>
    </div>
  );
};


export const getStaticProps = async (context: { params: { slug: any; }; }) => {
  const pageSlug = context.params.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "project" && slug.current == "${pageSlug}" ]`);
  const url = `https://4orhaocq.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        desc: post.description,
        title: post.title,
        image: post.logo,
        link: post.link,
        features: post.features,
        instagram: post.instagram,
        youtube: post.youtube
      }
    }
  }
};

export async function getStaticPaths(): Promise<unknown> {
  
  const query = encodeURIComponent(`*[ _type == "project"]{title,slug}`);
  const url = `https://4orhaocq.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const path = result.result;

  const paths = path.map((project: { title: any; }) => {
    return { params: { slug: project.title} };
  });
  if (!paths) {
    return {
      notFound: true
    }
  } else {
    return {
       paths,
       fallback: false
    }
  }
}

export default Project;
