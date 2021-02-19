import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { IoCall } from 'react-icons/io5'
import { BsArrowLeft } from 'react-icons/bs'

const FooterCommon = () => {
  return (
    <div className="relative lg:bg-footer-pattern bg-mobile-footer-pattern bg-cover">
      {/* <img src="./images/footer.png" alt="" /> */}
      <div className="absolute top-2/3 transform sm:block hidden -translate-y-full right-0 z-40">
        <h1 className="text-white transform rotate-90 text-xl font-light flex items-center cursor-pointer">
          <BsArrowLeft className="text-white mr-2 text-2xl" />
          Back to top
        </h1>
      </div>
      <div className="absolute w-full h-1 bg-black top-0"></div>
      <div className="relative">
        <div className="absolute flex text-white text-2xl top-20 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-16">
          <div className="h-12 relative w-12 border border-white rounded-full mr-3">
            <FiInstagram className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <div className="h-12 relative w-12 border border-white rounded-full mr-3">
            <FaFacebookF className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <div className="h-12 relative w-12 border border-white rounded-full mr-3">
            <FaTwitter className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <div className="h-12 relative w-12 border border-white rounded-full mr-3">
            <FaLinkedinIn className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end pt-52 pb-20 text-white lg:pr-72 pr-auto">
          <div className="md:mr-28 mr-12 ml-2">
            <h1 className="md:text-2xl text-xl relative">
              Explore
              <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
              <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
            </h1>
            <div className="mt-8 text-sm md:text-lg">
              <p className="cursor-pointer">Home</p>
              <p className="mt-2 cursor-pointer">Events</p>
              <p className="mt-2 cursor-pointer">About Us</p>
              <p className="mt-2 cursor-pointer">Our services</p>
              <p className="mt-2 cursor-pointer text-green-500">Team</p>
            </div>
          </div>

          {/* second */}
          <div>
            <h1 className="md:text-2xl text-xl relative">
              Get in touch
              <div className="absolute top-full mt-2 left-0 w-24 md:w-32 h-1 bg-white opacity-25"></div>
              <div className="absolute top-full h-1 mt-2 w-16 md:w-24 bg-baseBlue left-0"></div>
            </h1>
            <div className="mt-8 text-sm md:text-lg">
              <p className="cursor-pointer flex items-center">
                <FiMail className="text-green-500 mr-2" />
                hello@srmkzilla.net
              </p>
              <p className="mt-2 cursor-pointer flex items-center">
                <IoCall className="text-green-500 mr-2" />
                Akshat Sinha
              </p>
              <p className="mt-2 cursor-pointer flex items-center">
                <IoCall className="text-green-500 mr-2" />
                Ishan Chabbra
              </p>
              <p className="mt-2 cursor-pointer flex items-center">
                <IoCall className="text-green-500 mr-2" />
                Sweta Nayak
              </p>
            </div>
          </div>

          {/* second */}
        </div>
      </div>
    </div>
  )
}

export default FooterCommon
