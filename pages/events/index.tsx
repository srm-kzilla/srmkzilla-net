import React from 'react'
import Head from 'next/head'
import Footer from '@shared/components/footer'
import FeaturedEvents from '@shared/components/events/featured-events'
import WhatsNew from '@shared/components/events/whats-new'
import { allEvents } from '../../utils/api'

export type SpeakerType = {
  name: string
  email?: string
  slug: string
  linkedIn?: string
  githubLink?: string
  image?: string
  about?: string
}

export type EventType = {
  id: string
  title: string
  slug: string
  tagline: string

  timeline: { date: string; description: string; title: string }[]
  speakers: SpeakerType[]
  image: any
  description: string
  icons: string[]
  startDate: string
  features: any
  eventCover: string
  isCompleted: boolean
  isRegClosed: boolean
}

interface EventsProps {
  featuredEvents: EventType[]
}

const Events = ({ featuredEvents }: EventsProps) => {
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
      <img
        src="./images/events-cover-3.jpeg"
        alt="background"
        draggable={false}
        style={{ filter: 'blur(4px)' }}
        className=" opacity-60 rounded-xl xl:h-screen h-screen w-screen object-cover "
      />
      <div className="absolute left-0 pl-10 md:pl-32 top-1/3 text-left">
        <h1 className="text-6xl uppercase">Events</h1>
        <p className="text-xl font-light	mt-4 max-w-2xl">
          A place where magic meets technology and makes our dream of sharing
          unique experiences with the developer community come true.
        </p>
      </div>
      <div
        className="mt-6 animate-bounce absolute bottom-6  w-full object-center cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }}
      >
        <span className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />{' '}
          </svg>
        </span>
      </div>
      <WhatsNew cardContent={featuredEvents} />
      {/* <FeaturedEvents cardContent={featuredEvents} /> */}
      <Footer />
    </div>
  )
}
export async function getServerSideProps() {
  let featuredEvents: EventType[]
  try {
    featuredEvents = await allEvents()
  } catch (err) {
    throw err
  }
  return { props: { featuredEvents } }
}

export default Events
