import React from 'react'
const EventTimeline = () => {
  const dummyData = [
    {
      title: 'title',
      date: '20/10/20',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi placeat quibusdam! Eos voluptatibus provident,et repellat tempora qui consequuntur laudantium. Tempora esse sedquisquam, porro soluta deleniti perferendis veritatis?',
    },
  ]
  return (
    <div>
      <h1 className="text-white text-3xl sm:text-5xl  font-semibold mt-10">
        Timeline
      </h1>
      {dummyData.map((i) => {
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
