import React from 'react'
import Head from 'next/head'
import {
  Navbar,
  Testimonals,
  Collaborate,
  ServicesProvided,
  Numbers,
  Carousel,
} from '../shared/components/services/services'
import { CarouselData } from '../shared/components/services/carouseldata'
import Stats from '../shared/components/services/numbersNew'
import FooterCommon from '../shared/components/footer_common'

const Services = () => {
  return (
    <div>
      <div className="bg-black overflow-hidden px-3">
        <Head>
          <title>SRMKZILLA | Services</title>
          <link rel="icon" href="./images/kzillalogo.png" />
        </Head>
        <Navbar />
        <div>
          <section className="h-3/4 md:my-5 my-20 mx-3 lg:mx-10">
            <div className="flex flex-col place-items-center">
              <Carousel slides={CarouselData} />
            </div>
          </section>
        </div>

        {/* Services Provided section starts*/}
        <section className="my-20 lg:my-24 mx-3 lg:mx-24">
          <div className="flex flex-col place-items-center">
            <ServicesProvided />
          </div>
        </section>
        {/* Services Provided section ends*/}

        {/* Collaborate&numbers section starts*/}
        <section className="min-h-screen my-3 lg:my-10  mx-3 lg:mx-10">
          <div className="flex flex-col place-items-center">
            <div className="text-gray-100 pb-10 mb-10 container">
              <h1 className="text-4xl font-semibold text-gray-100 text-center mb-5">
                Let’s talk numbers
              </h1>
              <h3 className="text-xl  text-gray-100 text-center mb-10">
                Producing Quality. Delivering Finest.
              </h3>
              {/* <Numbers /> */}
              <Stats />
            </div>

            <div className="text-gray-100 pb-10">
              <h1 className="text-4xl font-semibold text-center">
                Collaborate with us
              </h1>
            </div>
            <div className="xl:px-16">
              <Collaborate />
            </div>
          </div>
        </section>
        {/* Collaborate&numbers section ends*/}

        {/* Testimonals section starts*/}
        <section className="min-h-screen my-5 lg:my-10 mx-3 lg:mx-10">
          <div className="flex flex-col place-items-center">
            <div className="text-gray-100 pb-10">
              <h1 className="text-4xl font-semibold text-center mb-5">
                Our website delivers
              </h1>
              <h3 className="text-xl text-center">
                Don’t take our word for it
              </h3>
            </div>
            <div>
              <Testimonals />
            </div>
          </div>
        </section>
        {/* Testimonals section ends*/}
      </div>
      <FooterCommon />
    </div>
  )
}

export default Services
