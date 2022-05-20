import { EventType } from '@pages/events'
import React from 'react'
import SpeakerCard from './speaker-card'
const Fade = require('react-reveal/Fade')

const SpeakerPage = ({ event }: { event: EventType }) => {
  const { speakers } = event
  return (
    <Fade up>
    <div className="mx-auto mt-16">
      <h1 className="text-6xl sm:text-6xl font-semibold mt-10 mx-auto text-center md:mb-20">
        Speaker{speakers.length > 1 && 's'}
      </h1>
      <div className="flex flex-col mt-10 justify-center w-full">
        {speakers.map((i) => {
          return <SpeakerCard speaker={i} />
        })}
      </div>
    </div></Fade>
  )
}
export default SpeakerPage
