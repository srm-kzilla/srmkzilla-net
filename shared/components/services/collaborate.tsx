import React from "react";

const Collaborate = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap w-full md:flex-row text-white text-lg mx-3 justify-between">
        <div className="xl:w-3/6 lg:w-2/5 w-auto my-5 flex-3 flex-col">
          Collaboration means challenging our potential and achieving a common
          goal. We can get together and bring out the best in us.
          <p className="mt-3">
            {" "}
            <span className="font-bold text-orange600">Together</span> we can
            create something magnificent.
          </p>
          <div className="my-10">
            <button className="px-14 py-2 rounded-3xl bg-baseBlack border-2 border-white focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:ml-20 lg:pl-20 flex place-items-center">
          <div>
            {" "}
            <img src="/images/thisisus.gif" className="w-max" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborate;