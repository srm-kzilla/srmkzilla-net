import React from 'react';
import { Navbar } from "../shared/components";
import Card_aboutus from "../shared/components/card_aboutus"
import {LeftTimeline, RightTimeline } from "../shared/components/timeline_aboutus"
import dynamic from "next/dynamic";

const cardData = [
  { title: "Values" },
  { title: "Mission" },
  { title: "Vision" },
];

const aboutus =  () => {
    return (
      <div className="bg-black text-white overflow-hidden">
        <Navbar />
        
        <div  className="w-screen">
            <div className="container  w-full text-white  p-2">
                <div className=" mx-auto  w-full p-14 lg:p-40 mb-8">
                    <h1 className="text-center text-3xl">
                    Welcome, Jack
                    </h1>
                    <p className='text-center mt-5 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim quam, luctus a nisi sed, dignissim suscipit tellus. Integer pulvinar nulla in blandit porta. Quisque nec porttitor eros, quis fermentum elit. Integer sodales fermentum egestas. Nunc sed rutrum enim, id volutpat metus. Morbi sagittis ultrices sapien in lacinia. Curabitur eget ex rutrum, eleifend dui sed, faucibus lorem.</p>
                </div>
            </div>


            <div className="flex flex-wrap justify-center">
            {cardData.map((card) => (
              <div><Card_aboutus name={card.title}/></div>
            ))}
            </div>
            

            <div className="h-auto overflow-hidden bg-black text-white lg:mx-20 mt-24">
              <div className=" mx-auto my-4">
                <h2 className="text-4xl lg:text-5xl text-center text-white ">Our Virtue</h2>
              </div>

              <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
                <div className="container  w-full h-full">
                  <div className="relative wrap overflow-hidden px-3 py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                    <div className=" absolute lg:top-20  md:left-1/2 lg:left-1/2 border-white h-full border"></div>
                    {/* timeline */}
                    <LeftTimeline />
                    <RightTimeline/>
                    <LeftTimeline/>

                      
                  </div>
                </div>
              </div>
            </div>
          </div>  
      </div>
        
    )
}

export default aboutus
