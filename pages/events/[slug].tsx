import EventDetails from '@shared/components/events/event-details'
import SpeakerPage from '@shared/components/events/event-speaker'
import EventTimeline from '@shared/components/events/event-timeline'
import PrizePage from '@shared/components/events/event-prizes'
import Head from 'next/head'
import React from 'react'
import { EventType } from '.'
import Footer from '../../shared/components/footer'
import { getEvent } from '../../utils/api'

const Events = (props: EventType) => {
  const { title, slug } = props
  console.log(props)

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
            <div className="flex items-center justify-center w-full mt-4 md:mt-10">
              <a href={`/register?event=${slug}`} rel="noopener noreferrer">
                <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                  <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 text-white ">
                    REGISTER NOW
                  </p>
                </button>
              </a>
            </div>
            <PrizePage event={props} />
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
    // props: eventDetails[0],
    props: {
      _id: '634e69e9ba83a43e057ac28a',
      description:
        'Tune in for a spooktacular 5 day online event in association with Hacktoberfest from 21st October to 28th October.\nFrom a dazzling interactive workshop to thrilling coding challenges spread across different levels, you’re in for a one of a kind treat (or trick :p)\n\nThe top 3 spookers in GitHub repository contributions win insane rewards! 🍬 Don’t worry, the top 50 github contributors get horrifyingly awesome goodies too! 🕸',
      description2:
        'Register below to get detailed knowledge and learn about Open Source software',
      eventCover:
        'https://s3.ap-south-1.amazonaws.com/events.srmkzilla.net/slither_into_open_source/covers/XYIGXmdJVh.png',
      icons: null,
      isCompleted: true,
      isRegClosed: true,
      maxRsvp: 200,
      prizes: [
        {
          amount: '10,000',
          description: 'Yeh paise mujhe dedo',
          asset: 'https://eshan.com',
          sponsor: 'Sponsor devta hai',
        },
      ],
      slug: 'slither_into_open_source',
      speakers: [
        {
          _id: '6352313443de56b95f8697b8',
          about:
            'Shivay Lamba is a software engineer specializing in Web Development, Machine Learning and DevOps. He is a Developer Relations Consultant helping various startups improve their developer experience. He is also an open source contributor, maintainer and mentor.',
          email: 'shivaylamba@gmail.com',
          githubLink: 'https://github.com/shivaylamba',
          image:
            'https://s3.ap-south-1.amazonaws.com/events.srmkzilla.net/slither_into_open_source/covers/mmb0t413Pw.jpeg',
          linkedIn: 'https://www.linkedin.com/in/shivaylamba/',
          name: 'Shivay Lamba',
          slug: 'slither_into_open_source',
        },
      ],
      startDate: '2022-10-21',
      tagline:
        'Now with 100% fewer nightmares of compiler errors! The possibilities to create wonders with open-source are vast. Join us to celebrate Hacktoberfest with a week-long event and give wings to your developer journey!',
      timeline: [
        {
          date: '2022-10-21 18:30',
          description:
            'Online interactive workshop and intro. Will you withstand meeting all of SRMKZILLA’s finest?',
          title: 'Interactive Workshop',
        },
        {
          date: '2022-10-22 00:00',
          description:
            'Fun post interactions and easy repository challenges! Contribute, learn and have fun!\n\n21st and 22nd October.',
          title: 'Easy to medium contributions!',
        },
        {
          date: '2022-10-23 00:00',
          description:
            'Crank up the spook! Level up and solve the moderate & hard repository challenges!\n\n23rd to 27th October.',
          title: 'Hard yet fun contributions!',
        },
      ],
      title: 'SLITHER into OPEN SOURCE',
    },
  }
}
export default Events
