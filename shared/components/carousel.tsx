import React, { useState } from "react";
import { CarouselData } from "./carouseldata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex h-full justify-center place-items-center mx-3">
      <FaArrowAltCircleLeft
        className="absolute top-1/2 left-3 cursor-pointer z-10"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-1/2 right-8 cursor-pointer z-10"
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-1 transition transform scale-105 duration-100"
                : "transition-opacity"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="image"
                className="w-12/13 rounded-xl"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
