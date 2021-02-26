import React, { useState } from 'react'

import { SERVICES } from '@lib/data/services'

const ServicesProvided = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className="bg-black-200 rounded-2xl text-white text-xl container mx-auto px-0 md:px-3 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center md:m-5 m-2 md:px-1 px-5">
          Services we provide
        </h1>
        <div className="flex flex-col lg:flex-row justify-around p-5 md:p-10 container">
          <div className="p-1 w-11/12 mr-0  flex-col hidden lg:block mt-14">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 text-left w-full mb-3">
                {SERVICES[activeIndex].head}
              </h2>
            </div>
            <div>
              <p className="w-11/12 pr-0 text-justify">
                {SERVICES[activeIndex].desc}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {SERVICES.map((service, index) => {
                return (
                  <div key={service.title}>
                    <div
                      onClick={() => {
                        setActiveIndex(index)
                      }}
                      className={`${
                        activeIndex == index
                          ? 'bg-orange300 text-black'
                          : 'bg-black-100 text-white'
                      } lg:px-6 lg:py-6 px-5 py-3 focus:outline-none hover:bg-orange300 cursor-pointer rounded-2xl }`}
                    >
                      <img
                        draggable={false}
                        src={`${
                          activeIndex == index
                            ? `${service.img_dark}`
                            : `${service.img_light}`
                        }`}
                        className="h-8"
                        alt="service icon"
                      />
                      <p className="active:text-black my-2 text-lg font-bold">
                        {service.title}
                      </p>
                    </div>
                    <div
                      key={service.title}
                      onClick={() => {
                        setActiveIndex(index)
                      }}
                      className={`${
                        activeIndex == index ? 'block lg:hidden' : 'hidden'
                      }`}
                    >
                      <div className="p-1 text-sm mt-3">
                        <p>
                          <strong> {SERVICES[activeIndex].head}</strong>
                        </p>
                        <p className="my-2">{SERVICES[activeIndex].desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="lg:px-10 lg:py-6  p-5 bg-black-100 rounded-2xl mt-5">
              <p className="my-2 font-bold">Penny for a Thought</p>
              <p className="my-2 text-sm">
                Have an amazing idea in mind? Let's discuss it over coffee and
                bring it to life! Creativity has no boundaries, and same applies
                to your ideas. Let's work on it together to create something
                beautiful.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 2200,
                    behavior: 'smooth',
                  })
                }}
                className="float-right bg-black border rounded-full text-white text-xs px-5 py-1 transform transition-transform duration-200 hover:-translate-y-1 border-white focus:outline-none"
              >
                know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesProvided
