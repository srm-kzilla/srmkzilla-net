import React from "react";
import { Navbar } from "../shared/components";
import Card_home from "../shared/components/card_home";
import Message from "../shared/components/Message";

const cardData = [
  {title: "First", image: ""},
  {title: "Second", image: ""},
  {title: "third", image: ""},
];

const Home = () => {
  return (
    <div className="bg-black">
      
      <section className="hero h-screen bg-black overflow-hidden relative">
        <Navbar />
        <div className='absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2'>
          <video autoPlay loop className='h-64 px-56' src="./images/hero_logo.mp4"></video>
          <h1 className="text-center text-white text-5xl font-bold">
            The campus club you love
          </h1>
          <p className='text-white opacity-25 text-center text-2xl mt-6' >
            delectus quia adipisci amet suscipit error eveniet perspiciatis eius pariatur, aspernatur ullam. Ipsa, dolores?
          </p>
        </div>
      </section>

      {/* New Section start */}
      <section className="works">
          <div className="bg-baseBlack pt-32">
            <h1 className='text-white text-center text-4xl'>What's New</h1>
            <div className="flex flex-wrap px-24 mt-20 pb-10">
              {cardData.map(card => <Card_home name={card.title} />)}
            </div>   
          </div>
      </section>
      {/* New section ends */}

      {/* {Process aection starts} */}
      <div className="process bg-baseBlack pt-10 min-h-screen px-40">
        <h1 className='text-white text-center text-4xl'>How we work</h1>
        {/* ideation */}
        <div>
          <Message color='baseBlue' />          
        </div>
        <div className='flex flex-wrap w-full'>
          <div className='w-3/6'>
            <h1 className='text-white text-3xl mt-24'>Ideation<span className='text-orange600 text-4xl'>.</span></h1>
            <p className='text-white text-lg my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque, labore dolorem, debitis id eum cum adipisci impedit quos mollitia earum, voluptate natus. Voluptas.</p>
            <img src="./images/bulb.png" className='h-96 w-auto' alt=""/>
          </div>
          <div className='mt-52'>
          <div className="relative video transform -rotate-6 bg-orange300 w-72 h-72 ml-40 rounded-2xl z-100">
            <div className='absolute h-full w-full transform rotate-6 bg-white -top-8 left-6 rounded-2xl'></div>
          </div>
          </div>
        </div>       
        {/* ideation end */}

        {/* design */}
        <div className='-mt-16'>
          <Message color='baseBlue' />          
        </div>
        <div className='flex flex-wrap w-full'>
          <div className='w-3/6'>
            <h1 className='text-white text-3xl mt-24'>Design<span className='text-orange600 text-4xl'>.</span></h1>
            <p className='text-white text-lg my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque, labore dolorem, debitis id eum cum adipisci impedit quos mollitia earum, voluptate natus. Voluptas.</p>
            <img src="./images/design1.png" className='w-72 ml-16 mt-16' alt=""/>
          </div>
          <div className='mt-32'>
          <img className='w-96 h-auto ml-16 mt-36 border-orange600 border-8 rounded-2xl' src="./images/design2.png" alt=""/>
          </div>
        </div>       
        {/* design end */}

        <div className=''>
          <Message color='orange300' />          
        </div>
        <div className='flex flex-wrap w-full'>
          <div className='w-3/6'>
            <h1 className='text-white text-3xl mt-24'>Technical<span className='text-orange600 text-4xl'>.</span></h1>
            <p className='text-white text-lg my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque, labore dolorem, debitis id eum cum adipisci impedit quos mollitia earum, voluptate natus. Voluptas.</p>
            <p className='text-white text-lg my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque, labore dolorem, debitis id eum cum adipisci impedit quos mollitia earum, voluptate natus. Voluptas.</p>
            <p className='text-white text-lg my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium reprehenderit mollitia nihil sunt modi. Ad eaque, labore dolorem, debitis id eum cum adipisci impedit quos mollitia earum, voluptate natus. Voluptas.</p>
          </div>
          <div className='mt-24'>
            <img src="./images/tech.png" className='w-96 ml-24 mt-24' alt=""/>
          </div>
        </div>
      </div>

      {/* Process section ends */}
    </div>
  );
};

export default Home;
