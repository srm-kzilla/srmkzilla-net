import React from "react";
import Head from "next/head";
import Testimonals from "../shared/components/services/testimonals";

const Services = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>SRMKZILLA</title>
        <link rel="icon" href="./images/kzillalogo.png" />
      </Head>

      {/* Testimonals section starts*/}
      <section>
        <div className="flex flex-col place-items-center">
          <div>
            <h1 className="text-6xl font-semibold text-gray-100 text-center mb-10">
              Our website delivers
            </h1>
            <h3 className="text-2xl  text-gray-100 text-center">
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
  );
};

export default Services;
