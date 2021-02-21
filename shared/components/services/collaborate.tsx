import React from 'react'

const Collaborate = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap w-full md:flex-row text-white text-xl mx-3 justify-between">
        <div className="xl:w-3/6 lg:w-2/4 w-auto my-5 flex-3 flex-col">
          Collaboration means challenging our potential and achieving a common
          goal. We can get together and bring out the best in us.
          <p className="mt-3">
            {' '}
            <span className="font-bold text-orange600">Together</span> we can
            create something magnificent.
          </p>
          <a href="mailto:hello@srmkzilla.net">
            <div className="my-10">
              <button className="flex px-5 py-2 rounded-3xl bg-black-200 border-2 border-white focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-y-1">
                <p>Get Started</p>
                <img src="/images/rightarrow_icon.png" className="ml-2 my-1" />
              </button>
            </div>
          </a>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div>
            {' '}
            <img src="/images/thisisus.gif" className="w-max sm:ml-36" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Collaborate
