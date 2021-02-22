import React, { useState } from 'react'
import Player from './player'

interface cardProps {
  audiourl: string
  name: string
  designation: string
  src: string
}

const MemberCard = (props: cardProps) => {
  const [cloudShow, setCloudShow] = useState(false)
  return (
    <div className="place-self-center">
      <div className="relative left-20 ml-8 z-20 top-20 -mt-24">
        <img
          src="/images/msg.png"
          alt="cloud"
          className={`${cloudShow ? 'block' : 'invisible'} w-36 content-center`}
        />
        <p
          className={`${
            cloudShow ? 'block' : 'invisible'
          } text-black mx-4 mb-1 relative -top-20 text-xs w-3/5`}
        >
          Hey! I'm {props.name}.
        </p>
      </div>
      <div
        onMouseOver={() => setCloudShow(true)}
        onMouseOut={() => setCloudShow(false)}
        className=" hover:bg-black rounded-2xl p-3 overflow-hidden mx-auto cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
      >
        <img
          className="w-44 hover:w-76  rounded-full p-5  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
          src={props.src}
          alt="avatar"
        />
        <div className={`${cloudShow ? 'block' : 'invisible'} pb-1`}>
          <Player url={props.audiourl} />
        </div>
        <span
          className={`${
            cloudShow ? 'block' : 'invisible'
          } text-xs text-gray-100 text-center mb-2`}
        >
          {props.designation}
        </span>
      </div>
    </div>
  )
}

export default MemberCard
