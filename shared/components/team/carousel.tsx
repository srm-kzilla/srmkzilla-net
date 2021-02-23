import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import sanityClient from '../../client'

const NewCarousel = () => {
  const [slides, setSlides] = useState<any>(null)
  const OldTeamMembers = [
    {
      name: 'Ayush',
      src: '/images/ayush.png',
      designation: 'Secretary',
      reviews:
        'hello jsdbjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
    },
    {
      name: 'kgjkg',
      src: '/images/ayush.png',
      designation: 'Secretary',
      reviews:
        'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
    },
    {
      name: 'hghjjv',
      src: '/images/ayush.png',
      designation: 'Secretary',
      reviews:
        'sjhasxa dxajdlor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
    },
    {
      name: 'dfgvfd',
      src: '/images/ayush.png',
      designation: 'Secretary',
      reviews:
        'ahjfahjafjflorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
    },
    {
      name: 'Ayush',
      src: '/images/ayush.png',
      designation: 'Secretary',
      reviews:
        'lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq',
    },
  ]

  const myArrow = () => {}
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "alumniReviews"]{
          name,
          designation,
          picture{
            asset->{
              _id,
              url
            },
            alt
          },
          reviews
      }`
      )
      .then((data) => setSlides(data))
      .catch(console.error)
  }, [])
  return (
    <div>
      <Carousel enableAutoPlay autoPlaySpeed={3000} isRTL={false}>
        {slides &&
          slides.map(
            (slide: {
              picture: { asset: { url: string } }
              name: string
              designation: string
              reviews: string
            }) => {
              console.log(slide)
              return (
                <div>
                  <div className="relative mx-auto bg-black-100 md:w-2/4 w-10/12 rounded-xl pb-14  pt-24">
                    <img
                      className="absolute top-7 left-1/2 transform -translate-x-1/2"
                      src="./images/car.png"
                      alt=""
                    />
                    <p className="text-white text-center px-5 md:px-16">
                      {slide.reviews}
                    </p>
                  </div>
                  <img
                    src={slide.picture.asset.url}
                    className="avatar mx-auto h-32 w-32 mt-12 rounded-full"
                  />
                  <h1 className="text-center text-2xl text-white mt-2">
                    {slide.name}
                  </h1>
                  <p className="text-center text-sm text-white mt-1">
                    {slide.designation}
                  </p>
                </div>
              )
            }
          )}
      </Carousel>
    </div>
  )
}

export default NewCarousel
