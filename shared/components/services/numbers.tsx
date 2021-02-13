import React, { useState, useEffect } from "react";

interface ProgressProps {
  width: number;
  percent: number;
  color: string;
  gif: any;
  stats: string;
}

export var ProgressBar = (props: ProgressProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.percent * props.width);
  });

  return (
    <div
      className="bg-baseBlack rounded-md flex my-3 mx-5"
      style={{ width: props.width }}
    >
      <div
        style={{ width: `${value}px`, backgroundColor: `${props.color}` }}
        className="h-20 rounded-md transition delay-100"
      />

      <img src={props.gif} className="w-20 -ml-1" />

      <p className="text-white mt-7 mx-3 z-50">{props.stats}</p>
    </div>
  );
};
const Numbers = () => {
  return (
    <div className="container m-5">
      <div className="div">
        <div className="flex">
          <div>
            <ProgressBar
              width={1100}
              percent={0.7}
              color={"rgb(14,189,150)"}
              gif={"/images/Comp-6.gif"}
              stats={`2345 followers`}
            />
          </div>

          <div>
            <img src="/images/insta_icon.png" className="h-12 mt-7" />
          </div>
        </div>
        <div className="flex">
          <div>
            <ProgressBar
              width={700}
              percent={0.6}
              color={"#FFF2CC"}
              gif={"/images/Comp-7.gif"}
              stats={"54 repositories"}
            />
          </div>
          <div>
            <img src="/images/github_icon.png" className="h-12 mt-7" />
          </div>
        </div>
        <div className="flex">
          <div>
            <ProgressBar
              width={1300}
              percent={0.9}
              color={"rgb(79,168,248)"}
              gif={"/images/Comp-8.gif"}
              stats={"2698 subscribers"}
            />
          </div>
          <div>
            <img src="/images/youtube_icon.png" className="h-12 mt-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
