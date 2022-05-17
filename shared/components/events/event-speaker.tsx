import React from 'react'

const EventSpeaker = () => {
  const DummySpeakerData = [{ name: 'Viraj' }]
  return (
    <div>
      <h1 className="text-white text-2xl sm:text-5xl  font-semibold mt-10">
        {/* {speaker.length>1?Speakers:Speaker} */}
        Speaker
      </h1>
      <p className="text-white mt-3">Name</p>
      <p className="text-white mt-3">
        About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        excepturi placeat quibusdam! Eos voluptatibus provident, et repellat
        tempora qui consequuntur laudantium. Tempora esse sed quisquam, porro
        soluta deleniti perferendis veritatis?
      </p>
    </div>
  )
}
export default EventSpeaker
