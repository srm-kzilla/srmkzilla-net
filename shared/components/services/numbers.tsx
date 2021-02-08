import React from "react";
import { Line } from "rc-progress";

const Numbers = () => {
  return (
    <div className="w-full container">
      {" "}
      <Line
        trailColor="#1f1e24"
        trailWidth="10"
        percent="70"
        strokeWidth="10"
        strokeColor="#FF644E"
        className="p-2 rounded-lg"
      />
      <Line
        trailColor="#1f1e24"
        trailWidth="10"
        percent="30"
        strokeWidth="10"
        strokeColor="#FFF2CC"
        className="p-2 rounded-lg"
      />
      <Line
        trailColor="#1f1e24"
        trailWidth="10"
        percent="60"
        strokeWidth="10"
        strokeColor="#58acf5"
        className="p-2 rounded-lg"
      />
    </div>
  );
};

export default Numbers;
