import React from 'react'
import Carousel from 'react-elastic-carousel'

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

const NewCarousel = () => {
  const myArrow = () => {}

  return (
    <div>
      <Carousel enableAutoPlay autoPlaySpeed={3000} isRTL={false}>
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
