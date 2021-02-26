import React from 'react'
import Carousel from 'react-elastic-carousel'
import { alumniReviews } from '@lib/data/reviews'

const NewCarousel = () => {
  return (
    <div>
      <Carousel enableAutoPlay autoPlaySpeed={30000} isRTL={false}>
        {alumniReviews.map((item) => {
          return (
            <div>
              <div className="relative mx-auto bg-black-100 md:w-2/4 w-10/12 rounded-xl pb-14  pt-24">
                <img
                  className="absolute top-7 left-1/2 transform -translate-x-1/2"
                  src="./images/car.webp"
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
                alt="alumni avatar"
              />
              <h2 className="text-center text-2xl text-white mt-2">
                {item.name}
              </h2>
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
