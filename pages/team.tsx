import React, { Component } from "react";
import { Navbar } from "../shared/components";
import MemberCard from "../shared/components/team/membercard";
import Carousell from "../shared/components/team/carousell";

const members = [
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },

  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },

  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
  {
    name: "john doe",
    src: "/images/ayush.png",
    designation: "Executive Board",
    audiourl: "/images/music.mp3",
  },
];

const Team = () => {
  return (
    <>
      <div className="bg-black overflow-hidden ">
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
        <div className=" text-white rounded-2xl p-1 md:p-5 bg-baseBlack grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-5 md:gap-6 lg:gap-5 md:mx-20 mx-2">
          {members.map((members) => (
            <MemberCard
              src={members.src}
              name={members.name}
              designation={members.designation}
              audiourl={members.audiourl}
              key={members.name}
            />
          ))}
        </div>

        <div className="mt-20 p-10">
          <h1 className="text-6xl font-semibold text-gray-100 text-center my-20">
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
