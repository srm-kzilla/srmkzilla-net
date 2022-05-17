import React from 'react'
const EventTimeline = ({ timeline }: { timeline: any[] }) => {
  return (
    <div>
      <h1 className="text-white text-3xl sm:text-5xl  font-semibold mt-10">
        Timeline
      </h1>
      {timeline &&
        timeline.map((i) => {
          return (
            <>
              <p className="text-white mt-3">{i.title} </p>
              <p className="text-white mt-3">{i.date}</p>
              <p className="text-white mt-3">{i.desc}</p>
            </>
          )
        })}
    </div>
  )
}
export default EventTimeline
