import React from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { IoCall } from 'react-icons/io5'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="relative w-screen bg-footer-pattern h-screen bg-cover">
      <div className="bg-black h-3 w-full absolute top-0"></div>
      <div className="icons flex text-white text-2xl float-right mr-24 mt-24">
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
      <div className="flex mt-52 float-right pl-64 transform translate-x-12">
        <div className="text-white">
          <h1 className="text-2xl relative">
            Explore
            <div className="absolute top-full mt-2 left-0 w-32 h-1 bg-white opacity-25"></div>
            <div className="absolute top-full h-1 mt-2 w-24 bg-baseBlue left-0"></div>
          </h1>
          <div className="mt-8 text-lg">
            <p className="cursor-pointer">Home</p>
            <p className="mt-2 cursor-pointer">Events</p>
            <p className="mt-2 cursor-pointer">About Us</p>
            <p className="mt-2 cursor-pointer">Our services</p>
            <p className="mt-2 cursor-pointer text-green-500">Team</p>
          </div>
        </div>
        <div className="text-white ml-24">
          <h1 className="text-2xl relative">
            Get in touch
            <div className="absolute top-full mt-2 left-0 w-32 h-1 bg-white opacity-25"></div>
            <div className="absolute top-full h-1 mt-2 w-24 bg-baseBlue left-0"></div>
          </h1>
          <div className="mt-8 text-lg">
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
      </div>
    </div>
  )
}

export default Footer
