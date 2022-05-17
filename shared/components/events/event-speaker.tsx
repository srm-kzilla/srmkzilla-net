import React from 'react'
import SpeakerCard from './speaker-card'

const SpeakerPage = ({ SpeakerData }: { SpeakerData: any[] }) => {
  return (
    <div>
      {SpeakerData.length > 1 ? (
        <h1 className="text-white text-2xl sm:text-5xl  font-semibold mt-10">
          Speakers
        </h1>
      ) : (
        <h1 className="text-white text-2xl sm:text-5xl  font-semibold mt-10">
          Speaker
        </h1>
      )}

      <p className="text-white mt-3">Name</p>
      <p className="text-white mt-3">
        About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        excepturi placeat quibusdam! Eos voluptatibus provident, et repellat
        tempora qui consequuntur laudantium. Tempora esse sed quisquam, porro
        soluta deleniti perferendis veritatis?
      </p>
      <div className="flex flex-row mt-10 justify-center">
        {SpeakerData.map((i) => {
          return (
            <SpeakerCard name={i.name} about={i.about} linkedIn={i.linkedin} />
          )
        })}
      </div>
    </div>
  )
}
export default SpeakerPage
