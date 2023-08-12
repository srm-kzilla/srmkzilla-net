import React from 'react'

const Testimonals = () => {
  return (
    <div className="mb-10 md:px-24 px:12">
      <div className="w-6/7 py-16 flex flex-col flex-wrap bg-black-200 rounded-2xl  text-white text-xl justify-items-center items-center">
        <div className="flex flex-col lg:flex-row md:mt-5 -mt-5  w-4/5  justify-items-center items-center">
          <div className="flex flex-col">
            <div className="rounded-full w-40 p-2 h-40 border-white border-2 ">
              <img
                src="/images/testimonals_person1.jpg"
                className="rounded-full w-full h-full"
                draggable={false}
                alt="testimonals person 1"
              />
            </div>
            <div className="flex place-self-center mb-10 lg:mb-0 py-5 w-44">
              <div className="mr-1">
                <img
                  src="/images/orangeline.png"
                  className="w-5/6"
                  draggable={false}
                  alt="line"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-left font-bold">Kushal Aralihalli</h2>
                </div>

                <div>
                  <p className="text-left text-sm">
                    Product Manager, Sarthaka Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-items-center items-center lg:px-20 -mt-10">
            <p className="lg:w-6/7 md:text-lg text-sm text-justify">
              I'm incredibly grateful for the fantastic support we received from
              SRMKZILLA in building our website and designs. Their dedication
              and expertise were evident at every step, and their ongoing
              assistance is truly appreciated. Thanks to SRMKZILLA, our NGO'S
              online presence has flourished, allowing us to connect with our
              donors and under privileged Students. They are a highly
              recommended partner for anyone seeking top-notch web development
              and design services.
            </p>
          </div>
        </div>
        <div className="flex mt-16 flex-col lg:flex-row w-4/5 justify-items-center items-center">
          <div className="flex flex-col">
            <div className="rounded-full border-white h-40 w-40 p-2 border-2">
              <img
                src="/images/testimonals_person2.jpg"
                className="rounded-full h-full w-full"
                draggable={false}
                alt="testimonals person 2"
              />
            </div>
            <div className="flex place-self-center mb-10 lg:mb-0 py-5 w-52">
              <div className="mr-1">
                <img
                  src="/images/orangeline.png"
                  className="w-5/6"
                  draggable={false}
                  alt="line"
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-left font-bold">Aditya Baburajan</h2>
                </div>

                <div>
                  <p className="text-left text-sm">The Elecruisers SRMIST</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-items-center items-center lg:pl-10 lg:pr-20 -mt-10">
            <p className="lg:w-6/7 md:text-lg text-sm text-justify">
              SRMKZILLA did a great job developing our website,
              theelecruisers.in . Whether providing direct development support
              or giving us the opportunity to make our development updates,
              SRMKZILLA's web design expertise and support services were top
              notch! It didn't take long to stand up our website, and we were
              pleased with the design and layout of the graphics and
              information. We look forward to engaging with the club again,
              especially as we look to build out our site services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonals
