import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import Card_home from "./card_home";

const cardData = [
  {
    title: "First",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
  {
    title: "Second",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
  {
    title: "third",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
  {
    title: "third",
    image: "./images/testImage.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente enim pariatur blanditiis, tempore quia distinctio nihil atque deserunt eius repellendus. Cumque veniam corrupti",
  },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Homecarousel = () => {
  return (
    <div className="z-20">
      <Carousel breakPoints={breakPoints} isRTL={true}>
        {cardData.map((card) => (
          <Card_home name={card.title} image={card.image} desc={card.desc} />
        ))}
        
      </Carousel>
    </div>
  );
};

export default Homecarousel;
