import React, { useState, useEffect } from "react";
import axios from "axios";

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
        className="h-20 rounded-md transition delay-100 relative"
      />

      <img src={props.gif} className="w-20 -ml-1" />

      <p className="text-white mt-7 mx-3 sticky top-10 left-0 z-50">
        {props.stats}
      </p>
    </div>
  );
};
const Numbers = () => {
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  useEffect(() => {
    axios
      .get("https://www.instagram.com/srmkzilla/?__a=1", {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        setFollowers(res?.data?.graphql?.user?.edge_followed_by.count || 2400);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/srm-kzilla", {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        setRepos(res.data.public_repos || 31);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              stats={`${followers} followers`}
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
              percent={0.5}
              color={"#FFF2CC"}
              gif={"/images/Comp-7.gif"}
              stats={`${repos} repositories`}
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
              percent={0.8}
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
