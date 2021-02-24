import React from 'react'
import Head from 'next/head'
const Fade = require('react-reveal/Fade')

import Navbar from '@shared/components/navbar'
import SwipeCard from '@shared/components/about/swipe-cards'
import { LeftTimeline, RightTimeline } from '@shared/components/about/timeline'
import Footer from '@shared/components/footer'
import { getTimeline } from '@lib/sanity-api'
import { CARDS } from '@lib/data/about'

const AboutUs = ({ timelineData }) => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Head>
        <title>SRMKZILLA | About</title>
      </Head>
      <Navbar />

      <div className="md:mt-12">
        <div className="md:h-screen h-auto items-center flex justify-center">
          <div className="md:h-3/4 h-full sm:w-10/12 w-full md:mb-16 mb-8 rounded-none md:rounded-xl overflow-hidden">
            <img
              src="/images/mozofest.png"
              draggable={false}
              alt="image"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="flex flex-wrap
         items-center justify-center"
        >
          {CARDS.map((card) => {
            return <SwipeCard content={card} key={card.name} />
          })}
        </div>

        <div className="h-auto overflow-hidden bg-black text-white lg:mx-auto mt-14 md:mt-20">
          <Fade up>
            <h2 className="mx-auto font-medium my-4 text-4xl lg:text-5xl text-center text-white ">
              Our Virtues
            </h2>
          </Fade>

          <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
            <div className="container  w-full h-full">
              <div className="relative wrap overflow-hidden pr-3 py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                <div className=" absolute lg:top-20 invisible md:visible lg:visible md:left-1/2 lg:left-1/2 border-white h-full border"></div>
                {timelineData.length > 0 &&
                  timelineData.map((timeline, index) =>
                    index % 2 == 0 ? (
                      <RightTimeline data={timeline} key={index} />
                    ) : (
                      <LeftTimeline data={timeline} key={index} />
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const timelineData = await getTimeline()

  return {
    props: { timelineData },
  }
}

export default AboutUs
