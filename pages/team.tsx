import React from 'react'
import Navbar from '../shared/components/navbar'
import MemberCard from '../shared/components/team/membercard'
import Carousel from '../shared/components/team/carousel'

const OldTeamMembers = [
  {
    name: 'Ayush',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'hello jsdbjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'kgjkg',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'hghjjv',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'sjhasxa dxajdlor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'dfgvfd',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'ahjfahjafjflorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'Ayush',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
]

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
          <h1 className="text-5xl font-semibold text-gray-100 text-center mb-10 mx-2">
            Meet the team
          </h1>
          <h3 className="text-2xl font-semibold text-gray-100 text-center">
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

        <div className="my-10 p-10">
          <h1 className="text-5xl font-semibold text-gray-100 text-center my-20">
            Hear it form the team
          </h1>
          <Carousel slides={OldTeamMembers} />
        </div>
      </div>
    </>
  )
}

export default Team
