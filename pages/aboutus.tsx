import React from 'react'
import Navbar from '../shared/components/navbar'
import Head from 'next/head'
import CardSwipe from '../shared/components/card_aboutus'

import {
  LeftTimeline,
  RightTimeline,
} from '../shared/components/timeline_aboutus'
import dynamic from 'next/dynamic'

const cardData = [
  { title: 'Values' },
  { title: 'Mission' },
  { title: 'Vision' },
]

const db = [
  {
    name: 'Values',
    desc:
      'As Phil Jackson justly quoted, "Good teams become great ones when the members trust each other enough to surrender the Me for the We"',
  },
  {
    name: 'Values',
    desc: 'We at SRMKZILLA intend to move together as one.',
  },
  {
    name: 'Values',
    desc:
      'We actively notice our communities and cater to their demands irrespective of the hardships that may hinder our way. ',
  },

  {
    name: 'Values',
    desc:
      'We believe in taking small steps to accomplish big goals without losing our focus and determination. ',
  },
  {
    name: 'Values',
    desc:
      'We aim to grow bit by bit by our experiences, ideas, and perspectives manifested by the community of keen individuals',
  },
]
const db2 = [
  {
    name: 'Mission',
    desc:
      'As a part of Mozilla’s open-source community, our mission is to provide a platform for inquisitive minds by guiding and empowering their aspirations. ',
  },
  {
    name: 'Mission',
    desc:
      'To guide these individuals to exhibit professional work ethics, commitment, and leadership qualities to emerge as influential leaders in the times to come.',
  },
  {
    name: 'Mission',
    desc:
      'To help these individuals create a powerful nation and solve complex technical problems hindering their development.',
  },
]
const db3 = [
  {
    name: 'Vision',
    desc:
      'A community that discovers and invests in young minds that have the potential to make a difference.',
  },
  {
    name: 'Vision',
    desc:
      'To spread awareness about the latest technological advancements and helping the curious minds choose their niche to feed in. ',
  },
  {
    name: 'Vision',
    desc:
      'To advocate free education and appraise the power of technical education in the form of seminars, workshops, and webinars.',
  },

  {
    name: 'Vision',
    desc:
      'We believe in taking small steps to accomplish big goals without losing our focus and determination. ',
  },
  {
    name: 'Vision',
    desc:
      'We aim to grow bit by bit by our experiences, ideas, and perspectives manifested by the community of keen individuals',
  },
]

const aboutus = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Head>
        <title>SRMKZILLA | About</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <Navbar />

      <div className="w-screen">
        <div className="container  w-full text-white  p-2">
          <div className=" mx-auto  w-full p-14 lg:p-40 mb-8">
            <h1 className="text-center text-3xl">Welcome, Jack</h1>
            <p className="text-center mt-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              enim quam, luctus a nisi sed, dignissim suscipit tellus. Integer
              pulvinar nulla in blandit porta. Quisque nec porttitor eros, quis
              fermentum elit. Integer sodales fermentum egestas. Nunc sed rutrum
              enim, id volutpat metus. Morbi sagittis ultrices sapien in
              lacinia. Curabitur eget ex rutrum, eleifend dui sed, faucibus
              lorem.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-gap-3">
            <CardSwipe datas={db} />
            <CardSwipe datas={db2} />
            <CardSwipe datas={db3} />
          </div>
        </div>

        <div className="h-auto overflow-hidden bg-black text-white lg:mx-auto mt-24">
          <div className=" mx-auto my-4">
            <h2 className="text-4xl lg:text-5xl text-center text-white ">
              Our Virtue
            </h2>
          </div>

          <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
            <div className="container  w-full h-full">
              <div className="relative wrap overflow-hidden pr-3 py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                <div className=" absolute lg:top-20 invisible md:visible lg:visible md:left-1/2 lg:left-1/2 border-white h-full border"></div>
                {/* timeline */}
                <LeftTimeline />
                <RightTimeline />
                <LeftTimeline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutus
