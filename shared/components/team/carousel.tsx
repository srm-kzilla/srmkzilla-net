import React, { useState } from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'

const OldTeamMembers = [
  {
    name: 'Ayush',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
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
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'dfgvfd',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
  {
    name: 'Ayush',
    src: '/images/ayush.png',
    designation: 'Secretary',
    message:
      'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
  },
]

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <>
      <div className="relative flex h-full justify-center place-items-center mx-1 lg:mx-3">
        <FaArrowAltCircleUp
          className="absolute lg:top-1/2 top-2/3 lg:left-3 left-1 cursor-pointer z-10 text-gray-300"
          onClick={prevSlide}
        />
        <FaArrowAltCircleDown
          className="absolute lg:top-1/2 top-2/3 lg:right-8  right-1 cursor-pointer z-10 text-gray-300"
          onClick={nextSlide}
        />
        {OldTeamMembers.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? 'opacity-1 transition transform scale-105 duration-50 lg:w-3/6 lg:p-3 w-6/7 focus:none'
                  : 'transition-opacity duration-300'
              }
              key={index}
            >
              {index === current && (
                <div>
                  <div className="rounded-xl bg-black-200">
                    <div className="lg:m-5 lg:p-20 p-3 lg:text-2xl text-white">
                      {slide.message}
                    </div>
                  </div>
                  <div className="m-auto flex flex-col place-items-center my-3 lg:p-15 lg:w-3/5 text-white">
                    <img
                      className="lg:w-56 w-32 object-cover rounded-full self-center"
                      src={slide.src}
                      alt="avatar"
                    />

                    <div className="text-center lg:mt-5 font-bold">
                      {slide.name}
                    </div>
                    <div className="text-center lg:my-2">
                      {slide.designation}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Carousel
