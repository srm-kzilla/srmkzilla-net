import React from 'react'
import Head from 'next/head'
import Footer from '@shared/components/footer'
import FeaturedEvents from '@shared/components/events/featured-events'
import { allEvents } from '../../utils/api'

type Events = {
  id: string
  title: string
  slug: string
  image: any
  description: string
  icons: string[]
  startDate: string
  features: any
  eventCover: string
  isCompleted: false
}

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

      <div>
        <img
          src="./images/events-bg.png"
          alt="background"
          draggable={false}
          className="m-auto mt-28 rounded-3x1 px-9"
        />
      </div>
      {/* <WhatsNew cardContent={featuredEvents} /> */}
      <FeaturedEvents cardContent={featuredEvents} />
      <Footer />
    </div>
  )
}
export async function getServerSideProps(context: { params: { slug: any } }) {
  let featuredEvents: Events
  try {
    featuredEvents = await allEvents()
    console.log(featuredEvents)
  } catch (err) {
    throw err
  }
  return { props: { featuredEvents } }
}

export default Events
