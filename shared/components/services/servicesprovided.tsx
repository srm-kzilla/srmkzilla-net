import React from "react";

const ServicesProvided = () => {
  return (
    <>
      <div className="bg-baseBlack rounded-2xl text-white text-xl container py-10">
        <h1 className="text-5xl font-semibold text-gray-100 text-center m-5">
          Services we provide
        </h1>
        <div className="flex flex-col md:flex-row justify-around p-10 container">
          <div className="p-1  mr-5 flex flex-col">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 text-left my-5">
                Web Development
              </h2>
            </div>
            <div>
              <p className="lg:w-80 text-justify">
                SRMKZILLA has expertise in creating robust, scalable,
                responsive, and powerful web portals. This enables us to deliver
                web portals that are a perfect amalgamation of features such as
                e-mails, chats, news, and information. If you can think it, we
                can web it.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="lg:p-10  p-5 bg-orange300 rounded-2xl mt-3 md:mt-0">
                <img src="/images/Black-webdev.png" />
                <p className="text-black my-2 font-bold"> Web Development</p>
              </div>
              <div className="lg:p-10 p-5  bg-baseBlack200 rounded-2xl">
                <img src="/images/webdes.png" />
                <p className="my-3 font-bold"> Web Design</p>
              </div>
              <div className="lg:p-10  p-5 bg-baseBlack200 rounded-2xl">
                <img src="/images/gfx.png" />
                <p className="mt-5 font-bold"> Graphic designing</p>
              </div>
              <div className="lg:p-10  p-5 bg-baseBlack200 rounded-2xl">
                <img src="/images/mobapp.png" className="-mt-5" />
                <p className="font-bold"> Mobile application</p>
              </div>
            </div>

            <div className="lg:p-10  p-5 bg-baseBlack200 rounded-2xl my-5">
              <p className="my-2 font-bold">Others</p>
              <p className="my-2">
                We are also expanding our domains with Machine Learning,
                Artificial Intelligence and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesProvided;
