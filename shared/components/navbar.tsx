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
    <nav className="bg-transparent fixed w-full">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <img className="w-10" src="/images/kzillalogo.png" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
