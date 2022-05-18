import { EventType } from '@pages/events'
import React from 'react'
import SpeakerCard from './speaker-card'

const SpeakerPage = ({ event }: { event: EventType }) => {
  const { speakers } = event
  return (
    <div className="mx-auto">
      <h1 className="text-5xl sm:text-5xl font-semibold mt-10 mx-auto text-center">
        Speaker{speakers.length > 1 && 's'}
      </h1>
      <div className="flex flex-col mt-10 justify-center w-full">
        {speakers.map((i) => {
          return <SpeakerCard speaker={i} />
        })}
      </div>
    </div>
  )
}
export default SpeakerPage
