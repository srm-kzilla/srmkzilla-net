import React from "react";
import Head from "next/head";
import {
  Navbar,
  Testimonals,
  Collaborate,
  ServicesProvided,
  Numbers,
  Carousel,
} from "../shared/components";
import { CarouselData } from "../shared/components/carouseldata";

const Services = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>SRMKZILLA</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>
      <Navbar />

      <section className="my-20 lg:my-32 mx-3 lg:mx-10">
        <div className="flex flex-col place-items-center">
          <Carousel slides={CarouselData} />
        </div>
      </section>

      {/* Services Provided section starts*/}
      <section className="min-h-screen my-20 lg:my-32 mx-3 lg:mx-10">
        <div className="flex flex-col place-items-center">
          <ServicesProvided />
        </div>
      </section>
      {/* Services Provided section ends*/}

      {/* Collaborate&numbers section starts*/}
      <section className="min-h-screen my-3 lg:my-10  mx-3 lg:mx-10">
        <div className="flex flex-col place-items-center">
          <div className="text-gray-100 pb-10 mb-10 container">
            <h1 className="text-5xl font-semibold text-gray-100 text-center mb-5">
              Let’s talk numbers
            </h1>
            <h3 className="text-xl  text-gray-100 text-center mb-10">
              Producing Quality. Delivering Finest.
            </h3>
            <Numbers />
          </div>

          <div className="text-gray-100 pb-10">
            <h1 className="text-5xl font-semibold text-center">
              Collaborate with us
            </h1>
          </div>
          <div>
            <Collaborate />
          </div>
        </div>
      </section>
      {/* Collaborate&numbers section ends*/}

      {/* Testimonals section starts*/}
      <section className="min-h-screen my-3 lg:my-10 mx-3 lg:mx-10">
        <div className="flex flex-col place-items-center">
          <div className="text-gray-100 pb-10">
            <h1 className="text-5xl font-semibold text-center mb-5">
              Our website delivers
            </h1>
            <h3 className="text-xl text-center">Don’t take our word for it</h3>
          </div>
          <div>
            <Testimonals />
          </div>
        </div>
      </section>
      {/* Testimonals section ends*/}
    </div>
  );
};

export default Services;
