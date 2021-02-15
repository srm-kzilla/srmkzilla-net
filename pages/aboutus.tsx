import React from 'react';
import { Navbar } from "../shared/components";
import Card_aboutus from "../shared/components/card_aboutus"
import {LeftTimeline, RightTimeline } from "../shared/components/timeline_aboutus"
import dynamic from "next/dynamic";

const cardData = [
  { title: "Values" },
  { title: "Mission" },
  { title: "Mission" },
];

const aboutus =  () => {
    return (
      <div className="bg-black w-screen text-white ">
        <Navbar />
        
        <div  className="  w-screen">
            <div className="container  w-full text-white  p-2  bg-black">
               
                <div className=" mx-auto  w-full font-subHeading font-style:normal p-14 lg:p-40 mb-8 lg:mb-80 font-bold">
                    <h1 className="subHeading not-italic font-bold text-3xl lg:text-6xl  ">
                    Welcome, Jack
                    </h1>
                </div>
            </div>


            <div className="grid lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-3 sm:gap-2 md:gap-3 gap-14 ml-16 md:ml-12 lg:ml-36 lg:mb-20">
            {cardData.map((card) => (
              <Card_aboutus name={card.title}/>
            ))}
            </div>
            

            <div className="h-auto overflow-hidden bg-black text-white lg:mx-20 ">
              <div className=" mx-auto font-subHeading font-style: normal my-4 font-bold">
                <h2 className="subHeading not-italic font-bold text-4xl lg:text-5xl text-center text-white ">Our Virtue</h2>
              </div>

              <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
                <div className="container  w-full h-full">
                  <div className="relative wrap overflow-hidden px- py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                    <div className=" absolute lg:top-20   left-1/2 border-white h-full border"></div>
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
