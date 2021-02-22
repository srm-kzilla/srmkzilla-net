import React, { useState, useEffect } from 'react'
import { Search, Menu } from 'react-feather'
import Link from 'next/link'
import Dropdown from './dropdown'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [open, setOpen] = useState(false)

  const searchshow = () => {
    if (window.scrollY >= 200) {
      setSearch(true)
    } else {
      setSearch(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', searchshow)
  })

  return (
    <nav
      className={`${
        search ? 'bg-black' : open ? 'bg-black' : 'nav'
      } fixed z-50 w-full`}
    >
      <div className="container text-white px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-10" src="/images/kzillalogo.png" />
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Menu size={16} />
              </button>
            </div>
          </div>

          <div
            className={`${
              open ? 'block' : 'hidden'
            } md:flex md:items-center md:justify-between w-full flex-1`}
          >
            <div className="flex bg-opacity-20 flex-col md:flex-row md:items-center mx-5">
              <Link href="/">
                <div className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent">
                  About Us
                </div>
              </Link>
              <Link href="/services">
                <div className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent">
                  Our Services
                </div>
              </Link>
              <Link href="/team">
                <div className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent">
                  Team
                </div>
              </Link>
              <Dropdown
                name="What's New?"
                class="absolute md:left-96 md:my-12 md:mx-10 md:top-3 py-2 w-48 rounded-md shadow-md bg-black-200 cursor-pointer"
                items={[
                  {
                    label: 'Events',
                    link: 'https://events.srmkzilla.net/',
                  },
                  {
                    label: 'Projects',
                    link: '/projects',
                  },
                  {
                    label: 'Everything',
                    link: '/https://everything.srmkzilla.net/',
                  },
                ]}
                nameClass="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out relative z-10 hover:border-orange300 cursor-pointer border-b-2 border-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
