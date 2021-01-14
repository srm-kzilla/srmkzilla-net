import React, { useState, useEffect } from "react";
import { Search, Menu } from "react-feather";
import Link from "next/link";

const Navbar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [search, setSearch] = useState(false);
  const btntoggle1 = () => {
    setOpen1(!open1);
  };
  const btntoggle2 = () => {
    setOpen2(!open2);
  };
  const btntoggle3 = () => {
    setOpen3(!open3);
  };
  const openSearch = () => {
    setSearch(!search);
  };
  const searchshow = () => {
    if (window.scrollY >= 600) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", searchshow);
  }, []);

  return (
    <nav className="bg-baseBlack bg-opacity-20 fixed w-full">
      <div className="container text-white px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              <img className="w-10" src="/images/kzillalogo.png" />
            </div>

            <div className="flex md:hidden">
              <div className="lg:hidden flex flex-row">
                <input
                  type="text"
                  name="search"
                  className={`${
                    search ? "block" : "hidden"
                  } px-1 rounded-2xl md:mt-0 bg-baseBlack border focus:outline-none`}
                />
                <button
                  className="mx-4 md:mt-0 focus:outline-none"
                  onClick={openSearch}
                >
                  <Search size={16} />
                </button>
              </div>
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={btntoggle1}
              >
                <Menu size={16} />
              </button>
            </div>
          </div>

          <div
            className={`${
              open1 ? "block" : "hidden"
            } md:flex md:items-center md:justify-between w-full flex-1`}
          >
            <div className="flex bg-opacity-20 flex-col md:flex-row md:items-center mx-5">
              <Link href="/">
                <p className="md:mt-0 mx-2 mt-2 px-2 py-1 hover:border-lightOrange cursor-pointer border-b-2 border-transparent">
                  Home
                </p>
              </Link>
              <Link href="/">
                <p className="md:mt-0 mx-2 mt-2 px-2 py-1 hover:border-lightOrange cursor-pointer border-b-2 border-transparent">
                  Events
                </p>
              </Link>
              <Link href="/">
                <p className="md:mt-0 mx-2 mt-2 px-2 py-1 hover:border-lightOrange cursor-pointer border-b-2 border-transparent">
                  Our Services
                </p>
              </Link>
              <Link href="/">
                <p className="md:mt-0 mx-2 mt-2 px-2 py-1 hover:border-lightOrange cursor-pointer border-b-2 border-transparent">
                  Team
                </p>
              </Link>

              <Link href="/">
                <p
                  className="md:mt-0 mx-2 mt-2 px-2 py-1 relative z-10 hover:border-lightOrange cursor-pointer border-b-2 border-transparent"
                  onClick={btntoggle3}
                >
                  What's New?
                </p>
              </Link>
              <div
                className={`${
                  open3 ? "block" : "hidden"
                } absolute left-80 ml-10 mt-10 top-3 py-2 w-48 z-20 rounded-md shadow-md bg-baseBlack`}
              >
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
                </p>
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
                </p>
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
                </p>
              </div>
            </div>

            <div className="md:flex-row mt-4 md:mt-0 origin-top-right hidden md:flex  absolute right-5">
              <input
                type="text"
                name="search"
                className={`${
                  search ? "block" : "hidden"
                } px-1 rounded-2xl  md:mt-0 bg-baseBlack border focus:outline-none`}
              />
              <button
                className="mx-4  md:mt-0 focus:outline-none"
                onClick={openSearch}
              >
                <Search size={16} />
              </button>

              <button
                type="button"
                className="flex sm:flex-row focus:outline-none"
                onClick={btntoggle2}
              >
                <div>En</div>
              </button>
              <div
                className={`${
                  open2 ? "block" : "hidden"
                } origin-top-right absolute right-1 top-5 mt-2 w-48 rounded-md shadow-md py-1 bg-baseBlack`}
              >
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  Es
                </p>
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  Sp
                </p>
                <p className="block pointer-cursor px-4 py-2 text-sm text-white hover:text-lightOrange">
                  Hn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
