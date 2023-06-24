import React, { useState } from 'react'
import Player from './player'

interface CardProps {
  audioUrl?: string
  name: string
  designation: string
  src: string
}

const MemberCard = (props: CardProps) => {
  const [cloudShow, setCloudShow] = useState(false)

  return (
    <div
      className="place-self-center p-3 m-1 relative hover:bg-black rounded-2xl cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
      onMouseOver={() => setCloudShow(true)}
      onMouseOut={() => setCloudShow(false)}
    >
      <div className="absolute left-20 ml-8 top-20 -mt-28 z-50">
        <img
          src="/images/msg.png"
          alt="cloud"
          draggable={false}
          className={`${
            cloudShow ? 'block' : 'invisible'
          } h-28 max-w-screen-xl content-center`}
        />
        <p
          className={`${
            cloudShow ? 'block' : 'invisible'
          } text-black mx-4 mb-2 relative -top-20 mt-1 text-xs w-4/5`}
        >
          Hey! I'm {props.name}.
        </p>
      </div>

      <img
        className="w-44 hover:w-76 z-0 rounded-full p-5  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 h-44 object-cover object-top"
        src={props.src}
        alt="team member avatar"
        draggable={false}
      />
      <div className={`${cloudShow ? 'block' : 'invisible'} pb-1`}>
        {props.audioUrl && <Player url={props.audioUrl} />}
      </div>
      <span
        className={`${
          cloudShow ? 'block' : 'invisible'
        } text-xs text-gray-100 text-center mb-1`}
      >
        {props.designation}
      </span>
    </div>
  )
}

export default MemberCard
