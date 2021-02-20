import React, { useEffect, useState } from 'react'
import Navbar from '../shared/components/navbar'
import MemberCard from '../shared/components/team/membercard'
import Carousel from '../shared/components/team/carousel'
import NewCarousel from '../shared/components/team/newCarousel'
import sanityClient from '../shared/client'
const members = [
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },

  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },

  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
  {
    name: 'john doe',
    src: '/images/ayush.png',
    designation: 'Executive Board',
    audiourl: '/images/music.mp3',
  },
]

const Team = () => {
  return (
    <>
      <div className="bg-black overflow-hidden ">
        <Navbar />
        <p>fhjfvk</p>
        <div className="my-20">
          <h1 className="text-4xl font-semibold text-gray-100 text-center mb-10 mx-2">
            Meet the team
          </h1>
          <h3 className="text-2xl text-gray-100 text-center">
            syadjgewkfewvasiugs
          </h3>
        </div>
        <div className=" text-white rounded-2xl pt-8 px-1 md:p-10 bg-black-200 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 md:mx-20 mx-2">
          {members.map((members) => (
            <MemberCard
              src={members.src}
              name={members.name}
              designation={members.designation}
              audiourl={members.audiourl}
              key={members.name}
            />
          ))}
        </div>

        <div className="my-10 px-0 md:px-10">
          <h1 className="text-4xl font-semibold text-gray-100 text-center my-20">
            Hear it form the team
          </h1>
          <NewCarousel />
        </div>
      </div>
    </>
  )
}

export default Team
