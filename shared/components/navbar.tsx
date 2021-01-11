import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [search, setSearch] = useState(false);
  const btntoggle1 = () => {
    setOpen(!open);
  };
  const btntoggle2 = () => {
    setOpen2(!open2);
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
      <div className="container mx-1 text-white p-5">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              <img className="w-10" src="/images/kzillalogo.png" />
            </div>

            <div className="flex md:hidden">
              <button type="button">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:justify-between flex-1">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link href="/">
                <p className="mx-2 mt-2 px-2 py-1 hover:border-lightOrange border-b-2 border-transparent">
                  Home
                </p>
              </Link>
              <Link href="/">
                <p className="mx-2 mt-2 px-2 py-1 hover:border-lightOrange border-b-2 border-transparent">
                  Events
                </p>
              </Link>
              <Link href="/">
                <p className="mx-2 mt-2 px-2 py-1 hover:border-lightOrange border-b-2 border-transparent">
                  Our Services
                </p>
              </Link>
              <Link href="/">
                <p className="mx-2 mt-2 px-2 py-1 hover:border-lightOrange border-b-2 border-transparent">
                  Team
                </p>
              </Link>

              <Link href="/">
                <p className="mx-2 mt-2 px-2 py-1 hover:border-lightOrange border-b-2 border-transparent">
                  What's New?
                </p>
              </Link>
            </div>

            <div className="flex">
              <input
                type="text"
                name="search"
                className={`${
                  search ? "block" : "hidden"
                } px-1 rounded-2xl bg-baseBlack border focus:outline-none`}
              />
              <button className="mx-4 focus:outline-none" onClick={openSearch}>
                <Search size={16} />
              </button>

              <button
                type="button"
                className="flex focus:outline-none"
                onClick={btntoggle2}
              >
                <div>En</div>
              </button>
              <div
                className={`${
                  open2 ? "block" : "hidden"
                } origin-top-right absolute right-10 top-10 mt-2 w-48 rounded-md shadow-md py-1 bg-baseBlack`}
              >
                <p className="block px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
                </p>
                <p className="block px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
                </p>
                <p className="block px-4 py-2 text-sm text-white hover:text-lightOrange">
                  projects
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
