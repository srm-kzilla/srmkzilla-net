import React from 'react'
import Carousel from 'react-elastic-carousel'

const OldTeamMembers = [
  {
    name: 'Ayush Ashatkar',
    src: '/images/ayushashatkar.jpg',
    designation: 'Secretary / Club captain',
    message: `Srmkzilla is place to grow, code & contribute on open source platform. It was a rollercoaster ride for me, where I learn about both technical and management skills and I can proudly say that it's a team dedication and smart work because of which it is the best technical club in south Indian region.This club play an influential role in my college journey and I'm proud to be a part of the club.`,
  },
  {
    name: 'Meenakshi Sharma',
    src: '/images/meenakshi.jpg',
    designation: 'Secretary',
    message: `Srmkzilla has been an integral part of my college experience. Without it, my journey definitely would not have been the same. It introduced me to so many new avenues, and more importantly, to so many amazing and interesting personalities that still continue to teach and influence me. It was, and always will be, an honor to be a part of the club!`,
  },
]

const NewCarousel = () => {
  const myArrow = () => {}

  return (
    <div>
      <Carousel enableAutoPlay autoPlaySpeed={30000} isRTL={false}>
        {OldTeamMembers.map((item) => {
          return (
            <div>
              <div className="relative mx-auto bg-black-100 md:w-2/4 w-10/12 rounded-xl pb-14  pt-24">
                <img
                  className="absolute top-7 left-1/2 transform -translate-x-1/2"
                  src="./images/car.png"
                  alt="quote"
                  draggable={false}
                />
                <p className="text-white text-center px-5 md:px-16">
                  {item.message}
                </p>
              </div>
              <img
                src={item.src}
                draggable={false}
                className="avatar mx-auto h-32 w-32 mt-12 rounded-full"
              />
              <h1 className="text-center text-2xl text-white mt-2">
                {item.name}
              </h1>
              <p className="text-center text-sm text-white mt-1">
                {item.designation}
              </p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default NewCarousel
