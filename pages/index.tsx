import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black p-20">
      <Link href="/team">
        <a className="text-white font-medium hover:text-gray-800">Team</a>
      </Link>
    </div>
  );
};

export default Home;
