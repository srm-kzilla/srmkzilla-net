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
        breakPoints={breakPoints}
        focusOnSelect={false}
        verticalMode
        enableAutoPlay
        autoPlaySpeed={4000}
      >
        {hearteammembers.map((hearteammembers) => (
          <div className="w-3/6  p-3 focus:none">
            <div className="rounded-xl bg-baseBlack">
              <div className="m-5 p-20 text-2xl text-white">
                {hearteammembers.message}
              </div>
            </div>
            <div className="m-auto p-20 w-3/5 text-white">
              <img
                className="w-56 h-56 object-cover ml-10 rounded-full self-center"
                src={hearteammembers.src}
                alt="avatar"
              />
              <div className="text-center mt-5 font-bold">
                {hearteammembers.name}
              </div>
              <div className="text-center my-2">
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
