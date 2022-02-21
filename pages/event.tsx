import React from 'react'
import Head from 'next/head'
import InstagramEmbed from 'react-instagram-embed'
import Tilt from 'react-parallax-tilt'
import Navbar from '../shared/components/navbar'
import Footer from '../shared/components/footer'
import * as BlockContent from '@sanity/block-content-to-react'
const Fade = require('react-reveal/Fade')
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {
  title: string
  image: any
  desc: string
  link?: string | null
  github?: string | null
  features: any
  instagram: string
  youtube?: string | null
  techstack: string[]
  instaKey: string
  poster: any
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
  poster,
}: Props) => {
  techstack=['typescript','nodejs','expressjs']
  link="some_link"
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>EVENT NAME </title>
      </Head>

      <div className="xl:h-screen h-auto">
        <Navbar />
        <img
          className="absolute top-0 right-0 xl:h-screen h-2/4 z-0"
          src="../images/projectbg.png"
          alt="background"
          draggable={false}
        />
        <div className="flex flex-wrap w-screen items-center content-center">
          <div className="z-10 lg:w-2/4 sm:px-24 px-5 sm:mt-40 mt-20 mx-auto">
            {image && (
              <img
                className="lg:relative h-24 lg:mx-0 mx-auto"
                src={image}
                alt="logo"
                draggable={false}
              />
            )}
            <h1 className="text-white text-5xl lg:text-left text-center font-semibold mt-10">
              Title goes here
            </h1>
            <p className="text-white lg:text-left text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-4 ">
            <Link href="/register">
            <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-5 my-10 ">
                  REGISTER
                </p>
              </button>
              </Link>
            
            </div>
            {/* <div className="flex mt-7 justify-start lg:text-left text-center">
              //link here
              {true && (
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-5 py-3 border border-white transform transition-transform duration-200 hover:-translate-y-1 rounded-full bg-black-200 text-white text-sm mb-5 focus:outline-none">
                    REGISTER
                  </button>
                </a>
              )}
            </div> */}
          </div>
          <div className="z-10 lg:w-2/4 sm:w-3/4 w-full relative lg:mx-0 transform lg:translate-x-0 sm:translate-x-5 translate-x-0 mt-44 lg:mt-40 mx-auto ">
            <Tilt>
              <div className="absolute bg-white sm:h-64 h-56 z-20 sm:w-2/3 w-3/4 sm:mx-auto left-2/4 top-3/4 transform  rounded-lg -translate-y-36 sm:-translate-x-64  -translate-x-1/2 overflow-hidden">
                {youtube ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={youtube as string}
                    frameBorder="0"
                    title="youtube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src="https://imd.mini.icom.museum/wp-content/uploads/sites/54/2021/01/IMD_2021_POSTER_EN-768x1152.jpg"
                    alt="poster"
                  />
                )}
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <section>
      <Fade up>
        <div>
          <h1 className="text-white text-center font-medium text-4xl sm:mt-64 lg:mt-28 mt-16">
            Tech Stack
          </h1>
          <div className="flex flex-wrap items-center justify-center px-24">
            {techstack &&
              techstack.map((tech: any) => (
                <div className="mx-5 my-5">
                  <img
                    src={`/images/tech_stack/${tech}.png`}
                    draggable={false}
                    alt="tech stack"
                  />
                </div>
              ))}
          </div>
          <div className="text-center mb-14">
            {link && (
               <Link href="/register">
                <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                  <p className="bg-orange300 px-5 py-2 rounded-full font-bold lg:my-5 my-10">
        REGISTER HERE 
                  </p>
                </button>
                </Link>
           
            )}
          </div>
        </div>
      </Fade>
      </section>
      <Fade up></Fade>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const eventDetails = await getEventDetails('')

  return {
    props: { eventDetails },
  }
}

export default Project
