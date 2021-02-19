import React from 'react'

const Testimonals = () => {
  return (
    <div className="md:px-16 mb-10 px-0">
      <div className="container flex flex-col flex-wrap bg-black-200 rounded-2xl pb-12 text-white text-xl py-1">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex items-center flex-col">
            <div className="rounded-full">
              <img src="/images/testimonals_person1.png" className="w-screen" />
            </div>
            <div className="flex place-self-center mb-10 md:mb-0">
              <div className="mr-1">
                <img src="/images/orangeline.png" className="w-5/6" />
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-left font-bold">Nikunj Panchal</h2>
                </div>

                <div>
                  <p className="text-left text-sm">SIIC, SRMIST</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="lg:w-4/5 lg:mt-16 px-6 py-1 md:text-lg text-sm text-justify">
              I have been fortunate to use the services of SRMKZILLA for the
              past six months. In this ever changing world of technology,
              SRMKZILLA has provided quality and timely service to my company.
              SRMKZILLA has not only provided great service but provided
              consultation on best practices for my company to make it grow
              further. Having been in business for 5 years, I know when I’ve
              found a club with integrity. I highly recommend this club and am
              available for further reference if needed.
            </p>
          </div>
        </div>
        <div className="flex  items-center flex-col lg:flex-row">
          <div className="flex items-center flex-col">
            <div className="rounded-full mt-5">
              <img src="/images/testimonals_person2.png" className="w-screen" />
            </div>
            <div className="flex items-center place-self-center mb-5 -mt-10">
              <div className="mr-1 ml-2">
                <img src="/images/orangeline.png" className="w-5/6" />
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
          <div>
            <p className="lg:w-4/5 text-sm md:text-lg lg:mt-16 px-6 py-1 text-justify">
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
