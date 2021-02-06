import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

const hearteammembers = [
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
  {
    name: "Ayush",
    src: "/images/ayush.png",
    designation: "Secretary",
    message:
      "lorem ipsum dolor sit amet. lorem ipsum dolor sit ameat. hjwqdvhjwd hwjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq wjdvxhw dwhqdgjwkdvjkwq wmqsvejwqhvdejwqvdejkwq",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const Carousell = () => {
  return (
    <>
      <Carousel
        // isRTL={false}
        breakPoints={breakPoints}
        focusOnSelect={false}
        verticalMode
        enableAutoPlay
        autoPlaySpeed={4000}
      >
        {hearteammembers.map((hearteammembers) => (
          <div className="lg:w-3/6 lg:p-3 focus:none">
            <div className="rounded-xl bg-baseBlack">
              <div className="lg:m-5 lg:p-20 lg:text-2xl text-white">
                {hearteammembers.message}
              </div>
            </div>
            <div className="m-auto lg:p-20 lg:w-3/5 text-white">
              <img
                className="lg:w-56 object-cover lg:ml-10 rounded-full self-center"
                src={hearteammembers.src}
                alt="avatar"
              />
              <div className="text-center lg:mt-5 font-bold">
                {hearteammembers.name}
              </div>
              <div className="text-center lg:my-2">
                {hearteammembers.designation}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousell;
