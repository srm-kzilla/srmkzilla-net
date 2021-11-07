import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@shared/components/footer'
import Navbar from '@shared/components/navbar'
import WhatsNew from '@shared/components/events/whats-new'
import FeaturedEvents from '@shared/components/events/featured-events'

const Events = ({ header, events, featuredEvents }) => {
  return (
    <div className="bg-black h-full w-full overflow-hidden text-white">
      <Head>
        <title>SRMKZILLA | Events</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <Navbar />
      sa
      <div>
        <img
          src="./images/events-bg.png"
          alt="background"
          draggable={false}
          className="m-auto mt-28 rounded-3x1 px-9"
        />
        {/* <div className="relative bottom-24 float-right mr-12 bg-white p-5 rounded-xl bg-opacity-40 backdrop-blur-lg text-white z-10 md:mr-44 mb-14">
          SSsdasdasdasd
          <br />
          asdasdasdsdasdsdSSsdasdasdasd
          <br />
          asdasdasdsdasdsdSSsdasdasdasd
          <br />
          asdasdasdsdasdsd
        </div> */}
      </div>
      <WhatsNew cardContent={events} />
      <FeaturedEvents cardContent={featuredEvents} />
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const header = {
    imageUrl:
      'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
    headline: 'Mozofest',
    description:
      'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
  }
  const events = [
    {
      picture:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      title: 'Mozofest',
      link:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      description:
        'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
    },
    {
      picture:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      title: 'Mozofest',
      link:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      description:
        'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
    },
    {
      picture:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      title: 'Mozofest',
      link:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      description:
        'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
    },
  ]
  const featuredEvents = [
    {
      picture:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+2.png',
      title: 'Mozofest',
      link:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      eventCompleted: false,
      date: 1636281415000,
      subTitle: 'with phalana dhimkana',
      description:
        'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
    },
    {
      picture:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+2.png',
      title: 'Mozofest',
      link:
        'https://certificates-ta.s3.ap-south-1.amazonaws.com/Rectangle+6.png',
      eventCompleted: false,
      date: 1636281415000,
      subTitle: 'with phalana dhimkana',
      description:
        'SRMKZILLA did a great job developing our website, theelecruisers.in . Whether providing direct development support or giving us the opportunity to ',
    },
  ]
  return {
    props: { header, events, featuredEvents },
  }
}
export default Events
