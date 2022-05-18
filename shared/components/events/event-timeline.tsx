import { EventType } from '@pages/events'
import React from 'react'
const EventTimeline = ({ event }: { event: EventType }) => {
  const { timeline } = event
  return (
    <div className="text-white ">
      <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-10">
        Timeline
      </h1>
      <ul className="md:m-4 flex w-full flex-col md:flex-row gap-8 lg:gap-16">
        {timeline &&
          timeline.map((i, id) => {
            return (
              <li
                key={id}
                className="md:w-full bg-black-200 p-6 rounded-xl bg-opacity-95 backdrop-blur-lg"
              >
                <h2 className="mt-3 text-2xl sm:text-3xl">{i.title} </h2>
                <p className="mt-3">{i.date}</p>
                <p className="mt-3">{i.description}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
export default EventTimeline
