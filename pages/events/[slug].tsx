import React from 'react'
import Head from 'next/head'
import Navbar from '../../shared/components/navbar'
import Footer from '../../shared/components/footer'
const Fade = require('react-reveal/Fade')
import { getEvent } from '../../utils/api'
import Link from 'next/link'
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

      <div className="xl:h-auto h-auto">
        <Navbar />
        <img
          className="absolute top-0 right-0 xl:h-screen h-2/4 z-0"
          src="../images/projectbg.png"
          alt="background"
          draggable={false}
        />
        <div className="flex flex-wrap w-screen items-start justify-start">
          <div className="w-full flex w-full md:items-start items-center md:mx-0 md:w-2/3 justify-center md:justify-start flex-col z-10  md:px-24 px-5 md:mt-28 mt-16 lg:mt-32 w-2/3 mx-10">
            <h1 className="text-white text-3xl sm:text-5xl  font-semibold mt-10">
              {title}
            </h1>
            <p className="text-white  sm:text-xl mt-4 text-center md:text-left text-sm">
              {description}
            </p>
            <div className="mt-4 ">
              <Link href={{ pathname: '/register', query: { event: slug } }}>
                <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                  <p className="bg-orange300 px-9 py-3 rounded-full font-bold lg:my-10 my-10 ">
                    REGISTER
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Fade up>
          {icons.length > 0 && (
            <div>
              <h1 className="text-white text-center font-medium text-4xl sm:mt-12  mt-8">
                Tech Stack
              </h1>
              <div className="flex flex-wrap items-center justify-center px-24">
                {icons.map((tech: any) => (
                  <div className="mx-5 my-5 w-20 h-20">
                    <img src={tech} draggable={false} alt="tech stack" />
                  </div>
                ))}
              </div>
              <div className="text-center mb-14">
                {slug && (
                  <Link
                    href={{ pathname: '/register', query: { event: slug } }}
                  >
                    <button className="focus:outline-none transform transition-transform duration-200 hover:-translate-y-1">
                      <p className="bg-orange300 px-5 py-2 rounded-full font-bold lg:my-5 my-10">
                        REGISTER HERE
                      </p>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </Fade>
      </section>

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
    props: eventDetails,
  }
}
export default Events
