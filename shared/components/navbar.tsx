import { useState, useEffect } from 'react'
import { Menu } from 'react-feather'
import Link from 'next/link'

import Dropdown from './dropdown'

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [open, setOpen] = useState(false)

  const searchshow = () => {
    window.scrollY >= 200 ? setSearch(true) : setSearch(false)
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
              <Link href="/">
                <img
                  className="w-10"
                  src="/images/kzillalogo.png"
                  draggable={false}
                  alt="srmkzilla logo"
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => setOpen(!open)}
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
                <p
                  onClick={() => setOpen(!open)}
                  className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent"
                >
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p
                  onClick={() => setOpen(!open)}
                  className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent"
                >
                  About Us
                </p>
              </Link>
              <Link href="/services">
                <p
                  onClick={() => setOpen(!open)}
                  className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent"
                >
                  Our Services
                </p>
              </Link>
              <Dropdown
                name="Team"
                class="absolute md:ml-0 ml-14 md:my-12 md:mx-10 md:top-3 py-2 w-48 rounded-md shadow-md bg-black-200 cursor-pointer"
                items={[
                  {
                    label: 'Current',
                    link: '/team',
                    newTab: false,
                  },
                  {
                    label: '2022',
                    link: '/team/2022',
                    newTab: false,
                  },
                ]}
                nameClass="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out relative z-10 hover:border-orange300 cursor-pointer border-b-2 border-transparent focus:outline-none"
              />
              <Link href="/projects">
                <p
                  onClick={() => setOpen(!open)}
                  className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent"
                >
                  Projects
                </p>
              </Link>
              <Link href="/events">
                <p
                  onClick={() => setOpen(!open)}
                  className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent"
                >
                  Events
                </p>
              </Link>
              <Dropdown
                name="What's New?"
                class="absolute md:ml-0 ml-14 md:my-12 md:mx-10 md:top-3 py-2 w-48 rounded-md shadow-md bg-black-200 cursor-pointer"
                items={[
                  // {
                  //   label: 'Events',
                  //   link: 'https://srmkzilla.net/events',
                  //   newTab: true,
                  // },
                  {
                    label: 'Everything',
                    link: 'https://everything.srmkzilla.net/',
                    newTab: true,
                  },
                  {
                    label: 'YouTube',
                    link: 'https://www.youtube.com/srmkzilla',
                    newTab: true,
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
