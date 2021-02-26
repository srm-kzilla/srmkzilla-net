import React from 'react'
import Tilt from 'react-tilt'
const Fade = require('react-reveal/Fade')
type Props = {
  data: {
    chattext: string
    picture: any
    date: string
    title: string
    description: string
  }
}

export const LeftTimeline = ({ data }: Props) => {
  return (
    <>
      <div className="mb-8 relative md:flex lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="z-30 md:flex lg:flex invisible md:visible lg:visible items-center order-1 bg-white border rounded-full mt-1 md:mt-14 lg:mt-12 lg:mr-5 md:ml-6 -ml-1 mb-4 md:mb-80 lg:mb-96 w-3 h-3 md:w-8 lg:w-8 md:h-4 lg:h-4"></div>
        <div className="order-1 bg-black w-full  lg:py-4">
          <div className="order-1 relative w-11/12 md:max-w-full lg:w-4/5 bg-baseBlue rounded-xl -mt-3 lg:mt-0 mx-5 lg:ml-20 px-6 py-3 lg:py-4">
            <h3 className=" lg:mb-3 w-full font-bold text-white lg:text-xl">
              {data.chattext}
            </h3>
            <div className="h-6 w-4 absolute bg-baseBlue right-0 transform top-full -mt-3">
              <div className="w-full h-full relative">
                <div className="absolute bottom-0 right-0 h-1/2 w-full rounded-tr-full bg-black"></div>
              </div>
            </div>
          </div>
          <Tilt options={{ max: 25, scale: 1 }}>
            <div className="Tilt-inner ml-4 lg:mx-10">
              <div className="lg:order-1 mt-6 lg:mt-12 ml-3 md:ml-0 lg:ml-16 lg:transform -rotate-2 min-w-96 w-11/12 md:max-w-full lg:w-4/5 h-max bg-black-200 rounded-xl p-4">
                <div className="rounded-xl overflow-hidden">
                  <img
                    className="h-11/12"
                    draggable={false}
                    src={data.picture.asset.url}
                    alt="card-image"
                  />
                </div>
                <p className="mt-4 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  {data.date}
                </p>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="lg:mb-20 mt-4 lg:mt-0 mx-4 pr-5 md:px-0 lg:p-0 md:-mr-2 lg:mx-0 w-full">
          <div className="lg:p-8 w-full ">
            <Fade up>
              <h3 className="lg:mb-3 w-full lg:mt-auto mt-8 text-white font-bold text-3xl">
                {data.title}
              </h3>
            </Fade>
            <p className="text-lg lg:leading-relaxed lg:tracking-widest ">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export const RightTimeline = ({ data }: Props) => {
  return (
    <>
      <div className="mb-8 md:flex lg:flex justify-between  items-center w-full right-timeline">
        <div className="z-30 md:flex lg:flex items-center invisible md:visible lg:visible order-1 bg-white border rounded-full mt-1 md:mt-5 lg:mt-10  lg:ml-0 md:-ml-1 -ml-1 mb-4 md:mb-80 lg:mb-96 w-3 h-3 md:w-8 lg:w-8 md:h-4 lg:h-4"></div>
        <div className="order-1 bg-black w-full">
          <div className="order-1 z-10 w-11/12 md:max-w-full lg:w-4/5 bg-orange600 relative rounded-xl -mt-3 lg:mt-0 mx-4 lg:mx-2 lg:ml-10 px-6 py-3 lg:py-4">
            <h3 className="lg:mb-3 w-full font-bold text-white lg:text-xl">
              {data.chattext}
            </h3>
            <div className="h-6 w-4 absolute bg-orange600 left-0 top-full -mt-3">
              <div className="w-full h-full relative">
                <div className="absolute bottom-0 right-0 h-1/2 w-full rounded-tl-full bg-black"></div>
              </div>
            </div>
          </div>

          <div className="h-6 w-4 bg-black block relative left-7   -mt-3  rounded-br-2xl translate-x-6/7"></div>
          <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
            <div className="Tilt-inner  ml-4 lg:mx-10">
              <div className="order-1 mt-6 lg:mt-12 lg:ml-4 ml-3 md:ml-0  lg:transform rotate-2 min-w-96 w-11/12 md:max-w-full lg:w-4/5 h-max bg-black-200 rounded-xl shadow-xl p-4">
                <div className="rounded-xl overflow-hidden">
                  <img
                    className="h-11/12"
                    draggable={false}
                    src={data.picture.asset.url}
                    alt="card-image"
                  />
                </div>
                <p className="mt-5 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  {data.date}
                </p>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="lg:mb-20 mt-4 lg:mt-0 mx-4 pr-5 md:px-0 lg:p-0 md:ml-0 lg:mx-0 w-full">
          <div className="lg:p-14 w-full ">
            <Fade up>
              <h3 className="lg:mb-3 w-full lg:mt-auto mt-8 text-white font-bold text-3xl">
                {data.title}
              </h3>
            </Fade>
            <p className="lg:text-lg leading-relaxed lg:tracking-widest ">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
