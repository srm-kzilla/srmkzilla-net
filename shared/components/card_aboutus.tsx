import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function CardSwipe(props) {
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <div className="w-96 h-96">
        {props.datas.map((data) => (
          <TinderCard
            className="absolute"
            key={data.name}
            onSwipe={(dir) => swiped(dir, data.name)}
            onCardLeftScreen={() => outOfFrame(data.name)}
          >
            <div className="relative bg-black-200 w-72 h-72 rounded-xl p-5">
              <h1 className="text-2xl font-bold text-center my-5">
                {data.name}
              </h1>
              <p className="text-justify mx-4">{data.desc}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default CardSwipe
