import EventTimeline from '@shared/components/events/event-timeline'
import SpeakerPage from '@shared/components/events/speaker-card'
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
            <h1 className="text-white text-3xl sm:text-5xl  font-semibold mt-10">
              {title}
            </h1>
            <p className="text-white  sm:text-xl mt-4 text-center md:text-left text-sm">
              {description}
            </p>
            <p className="text-white mt-10 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              earum mollitia laudantium repudiandae velit porro iure aliquam
              praesentium nostrum quasi! Incidunt dolores eum ab debitis
              quisquam itaque exercitationem excepturi repudiandae?
            </p>

            <div className="mt-4 ">
              <Link href={{ pathname: '/register', query: { event: slug } }}>
                <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                  <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 text-white ">
                    REGISTER
                  </p>
                </button>
              </Link>
            </div>
            <EventTimeline />
            <h1 className="text-white text-2xl sm:text-5xl  font-semibold mt-10">
              {/* {speaker.length>1?Speakers:Speaker} */}
              Speaker
            </h1>
            <p className="text-white mt-3">Name</p>
            <p className="text-white mt-3">
              About : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet excepturi placeat quibusdam! Eos voluptatibus provident,
              et repellat tempora qui consequuntur laudantium. Tempora esse sed
              quisquam, porro soluta deleniti perferendis veritatis?
            </p>
          </div>

          <TiltCard
            image={
              'https://mechenzie.s3.ap-south-1.amazonaws.com/autogenix.jpg'
            }
          />
        </div>
        <SpeakerPage
          name={'Pratham'}
          about={'undefined'}
          linkedIn={'undefined'}
        />
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
