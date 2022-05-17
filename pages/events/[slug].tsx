import EventDetails from '@shared/components/events/event-details'
import SpeakerPage from '@shared/components/events/event-speaker'
import EventTimeline from '@shared/components/events/event-timeline'
import TiltCard from '@shared/components/events/tilt-card'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../../shared/components/footer'
import { getEvent } from '../../utils/api'
const Fade = require('react-reveal/Fade')
type EventProps = {
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

const Events = ({ title, description, icons, slug }: EventProps) => {
  console.log(slug)
  const DummyDataSpeaker = [
    {
      name: 'Pratham',
      about: 'lorme ispus',
      linkedin: 'link',
      image: 'some image',
    },
    { name: 'Pratham', about: 'lorme ispus', linkedin: 'link' },
    { name: 'Pratham', about: 'lorme ispus', linkedin: 'link' },
  ]
  const timeline = [
    {
      title: 'title',
      date: '20/10/20',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi placeat quibusdam! Eos voluptatibus provident,et repellat tempora qui consequuntur laudantium. Tempora esse sedquisquam, porro soluta deleniti perferendis veritatis?',
    },
  ]
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen">
        <img
          className="absolute top-0 right-0 xl:h-screen h-2/4 z-0"
          src="../images/projectbg.png"
          alt="background"
          draggable={false}
        />
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="w-full flex md:items-start items-center md:mx-0 md:w-2/3 justify-center md:justify-start flex-col z-10  md:px-24 px-5 md:mt-28 mt-16 lg:mt-32 mx-10">
            <EventDetails title={title} description={description} slug={slug} />
            <EventTimeline timeline={timeline} />
            <SpeakerPage SpeakerData={DummyDataSpeaker} />
          </div>

          <TiltCard
            image={
              'https://mechenzie.s3.ap-south-1.amazonaws.com/autogenix.jpg'
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: { params: { slug: any } }) {
  let eventDetails: EventProps
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
