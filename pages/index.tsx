import React from "react";
import { Navbar } from "../shared/components";
import Card_home from "../shared/components/card_home";

const cardData = [
  {title: "First", image: ""},
  {title: "Second", image: ""},
  {title: "third", image: ""},
];
const names = ["whale", "squid", "turtle", "coral", "starfish"];

const Home = () => {
  return (
    <div className="bg-black">
      
      <section className="hero h-screen bg-black overflow-hidden relative">
        <Navbar />
        <div className='absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2'>
          <video className='h-64 px-56' src="./images/hero_logo.mp4"></video>
          <h1 className="text-center text-white text-5xl font-bold">
            The campus club you love
          </h1>
          <p className='text-white opacity-25 text-center text-2xl mt-6' >
            delectus quia adipisci amet suscipit error eveniet perspiciatis eius pariatur, aspernatur ullam. Ipsa, dolores?
          </p>
        </div>
      </section>
      <section className="works">
          <div className="bg-baseBlack pt-32">
            <h1 className='text-white text-center text-4xl'>What's New</h1>
            <div className="flex flex-wrap px-24 mt-20 pb-10">
              {cardData.map(card => <Card_home name={card.title} />)}
            </div>   
          </div>
      </section>
      <section className="process">

      </section>
    </div>
  );
};

export default Home;
