import EventDetails from '@shared/components/events/event-details'
import SpeakerPage from '@shared/components/events/event-speaker'
import EventTimeline from '@shared/components/events/event-timeline'
import Head from 'next/head'
import React from 'react'
import { EventType } from '.'
import Footer from '../../shared/components/footer'
import { getEvent } from '../../utils/api'

const Events = (props: EventType) => {
  const { title, slug } = props

  return (
    <div className="bg-black overflow-hidden text-white">
      <Head>
        <title>SRMKZILLA | {title}</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />
        <link rel="icon" href="/images/kzillalogo.png" />
      </Head>

      <div className="min-h-screen">
        <img
          className="absolute top-0 right-0 xl:h-screen z-0 opacity-80 object-contain"
          src="../images/projectbg.png"
          alt="background"
          draggable={false}
        />
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="mt-10 sm:mt-32 lg:mt-0 w-full lg:w-11/12 flex md:items-start items-center md:mx-0 justify-center md:justify-start flex-col z-10 px-0 sm:px-5 md:px-12  mx-10">
            <EventDetails event={props} />
            {props.timeline.length > 0 && <EventTimeline event={props} />}
            {props.speakers.length > 0 && <SpeakerPage event={props} />}
            {!props.isRegClosed && (
              <div className="flex items-center justify-center w-full mt-4 md:mt-10">
                <a href={`/register?event=${slug}`} rel="noopener noreferrer">
                  <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                    <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 text-white ">
                      REGISTER NOW
                    </p>
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: { params: { slug: any } }) {
  let eventDetails: EventType
  const pageSlug = context.params.slug
  try {
    eventDetails = await getEvent(pageSlug)
  } catch (err) {
    return {
      notFound: true,
    }
  }
  return {
    props: eventDetails[0],
  }
}
export default Events
