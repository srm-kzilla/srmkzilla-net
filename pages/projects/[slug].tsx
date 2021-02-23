import React from 'react'
import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed'
import Tilt from 'react-parallax-tilt'
import Navbar from '../../shared/components/navbar'
import Footer from '../../shared/components/footer'
const BlockContent = require('@sanity/block-content-to-react')
const Fade = require('react-reveal/Fade')
import { motion } from 'framer-motion'

type Props = {
  title: String
  image: any
  desc: Text
  link: URL
  github: URL
  features: any
  instagram: any
  youtube: any
  techstack: []
  instaKey: any
}

const Project = ({
  title,
  desc,
  image,
  features,
  instagram,
  youtube,
  techstack,
  instaKey,
  link,
  github,
}: Props) => {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>SRMKZILLA</title>
        <link rel="icon" href="../images/kzillalogo.png" />
      </Head>

      <div className="h-screen">
        <Navbar />
        <img
          className="absolute top-0 right-0 sm:h-screen h-2/3 z-0"
          src="../images/bgpro.png"
          alt=""
        />
        <div className="flex flex-wrap w-screen items-center content-center">
          <div className="z-10 lg:w-2/4 sm:px-24 px-12 sm:mt-40 mt-20 mx-auto">
            {image && (
              <motion.img
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="lg:relative lg:mx-0 mx-auto"
                src={image}
              />
            )}
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-white text-5xl lg:text-left text-center font-semibold mt-10"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-white lg:text-left text-center mt-4"
            >
              {desc}
            </motion.p>
            <div className="mt-7 lg:text-left text-center">
              <a href={`${link}`}>
                <button className="px-5 py-3 rounded-full bg-black-200 text-white text-sm mb-5 focus:none">
                  View Project
                </button>
              </a>
              {github && (
                <a href={`${github}`}>
                  <button className="px-8 ml-3 py-3 rounded-full bg-black-200 text-white text-sm focus:none">
                    Github
                  </button>
                </a>
              )}
            </div>
          </div>
          <div className="z-10 lg:w-2/4 sm:w-3/4 w-full relative lg:mx-0 transform lg:translate-x-0 sm:translate-x-5 translate-x-0 mt-44 lg:mt-44 mx-auto">
            <div className="absolute videoCard h-64 z-0 w-2/3 left-2/4 top-2/3 transform -rotate-3 rounded-lg sm:block hidden -translate-y-1/2 -translate-x-1/2"></div>
            <Tilt>
              <div className="absolute bg-white sm:h-64 h-56 z-20 sm:w-2/3 w-3/4 sm:mx-auto left-2/4 top-3/4 transform  rounded-lg -translate-y-36 sm:-translate-x-64  -translate-x-1/2 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={youtube}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <section>
        <Fade up>
          <div className="insta w-screen flex sm:px-24 px-8 lg:mt-auto sm:mt-24 items-center flex-wrap-reverse">
            <div className="lg:w-2/4 sm:w-96 w-full h-96 relative mx-auto">
              <div className=" absolute overflow-hidden sm:w-96 w-full sm:h-96 h-72 lg:right-16 right-auto top-2/3 transform -translate-y-2/3 lg:mt-0 sm:mt-20 mt-0 rounded-xl">
                <div className="">
                  <InstagramEmbed
                    url={instagram}
                    clientAccessToken={instaKey}
                    className="absolute w-full -top-12 transform -translate-y-1"
                    hideCaption={true}
                    containerTagName="div"
                    protocol=""
                    injectScript
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-2/4 lg:mt-0 sm:mt-64 mt-44 w-full">
              <div className="xl:w-4/5 lg:w-5/6 w-full mr-auto sm:mt-0 mt-20 py-10 sm:px-10 px-5 rounded-xl border-borderBlue border">
                <h1 className="text-white text-3xl mb-5 font-medium text-center">
                  What it does
                </h1>
                <p className="text-white font-light">
                  {features && <BlockContent blocks={features} />}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Fade up>
        <div>
          <h1 className="text-white text-center text-4xl mt-28">Tech Stack</h1>
          <div className="flex flex-wrap items-center justify-center px-24">
            {techstack.map((tech: any) => (
              <div className="mx-5 my-5">
                <img src={`/images/${tech}.png`} alt="tech stack" />
              </div>
            ))}
          </div>
          <div className="text-center mb-14">
            <button>
              <p className="bg-orange300 px-5 py-2 rounded-full font-medium lg:my-5 my-10">
                Explore {title}
              </p>
            </button>
          </div>
        </div>
      </Fade>
      <Footer />
    </div>
  )
}

export const getStaticProps = async (context: { params: { slug: any } }) => {
  const pageSlug = context.params.slug

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  const query = encodeURIComponent(
    `*[ _type == "project" && slug.current == "${pageSlug}" ]{
      title,
      slug,
      logo{
        asset->{
          _id,
          url
        },
        alt
      },
      link,
      github,
      features,
      youtube,
      instagram,
      techstack,
      description
    }`
  )
  const url = `https://${process.env.SANITY_ID}.api.sanity.io/v1/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json())
  const post = result.result[0]

  if (!post) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        desc: post.description,
        title: post.title,
        image: post.logo.asset.url,
        link: post.link,
        github: post.github,
        features: post.features,
        instagram: post.instagram,
        youtube: post.youtube,
        techstack: post.techstack,
        instaKey: process.env.INSTA_KEY,
      },
    }
  }
}

export async function getStaticPaths(): Promise<unknown> {
  const query = encodeURIComponent(`*[ _type == "project"]{title,slug}`)
  const url = `https://${process.env.SANITY_ID}.api.sanity.io/v1/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json())
  const path = result.result

  const paths = path.map((project: { title: any }) => {
    return { params: { slug: project.title } }
  })
  if (!paths) {
    return {
      notFound: true,
    }
  } else {
    return {
      paths,
      fallback: false,
    }
  }
}

export default Project
