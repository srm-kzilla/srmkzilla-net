import React, { Component } from "react";
import { Navbar } from "../shared/components";
import MemberCard from "../shared/components/team/membercard";
import Carousell from "../shared/components/team/carousell";

const members = [
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },

  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },

  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
  },
];

const Team = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <p>fhjfvk</p>
        <div className="my-20">
          <h1 className="text-7xl font-semibold text-gray-100 text-center mb-10">
            Meet the team
          </h1>
          <h3 className="text-3xl font-semibold text-gray-100 text-center">
            syadjgewkfewvasiugs
          </h3>
        </div>
        <div className="container mx-auto text-white rounded-xl p-1 md:p-10 bg-baseBlack grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-6">
          {members.map((members) => (
            <MemberCard
              src={members.src}
              name={members.name}
              designation={members.designation}
              key={members.name}
            />
          ))}
        </div>

        <div className="mt-20 p-10">
          <h1 className="text-7xl font-semibold text-gray-100 text-center my-20">
            Hear it form the team
          </h1>
          <div>
            <Carousell />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
