import React, { useState } from 'react'
import { CarouselData } from './carouseldata'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
interface props {
  slides: any
}
const Carousel = ({ slides }: props) => {
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
    <div className="relative flex justify-center mx-3 md:h-screen h-full">
      <FiArrowLeftCircle
        className="absolute md:text-4xl text-2xl transform -translate-y-1/2 text-white top-1/2 left-0 cursor-pointer z-10"
        onClick={prevSlide}
      />
      <FiArrowRightCircle
        className="absolute text-2xl md:text-4xl transform -translate-y-1/2 text-white top-1/2 right-2 cursor-pointer z-10"
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'opacity-1 transition transform scale-105 duration-50'
                : 'transition-opacity '
            }
            key={index}
          >
            {index === current && (
              <div className="md:h-screen h-auto items-center flex justify-center ">
                <div className="md:h-3/4 h-full sm:w-10/12 w-full rounded-xl overflow-hidden">
                  <img
                    src={slide.image}
                    draggable={false}
                    alt="image"
                    className="object-contain"
                  />{' '}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
