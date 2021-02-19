import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface ProgressProps {
  width: number;
  widthmob: number;
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
    <>
      <div className="hidden xl:block">
        <div
          className="bg-black-200 rounded-md flex my-3 mx-5"
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
      </div>
      <div className="xl:hidden">
        <div
          className="bg-black-200 rounded-md flex my-1 mx-1"
          style={{ width: props.widthmob }}
        >
          <div
            style={{ width: `${value}px`, backgroundColor: `${props.color}` }}
            className="h-10 rounded-md transition delay-100 relative"
          />

          <img src={props.gif} className="w-10 h-10 -ml-1" />

          <p className="text-white text-xs mt-1 mx-1 sticky top-10 left-0 z-50">
            {props.stats}
          </p>
        </div>
      </div>
    </>
  );
};
const Numbers = () => {
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [subscribers, setSubscribers] = useState("");
  useEffect(() => {
    axios
      .get("https://www.instagram.com/srmkzilla/?__a=1", {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        setFollowers(
          res?.data?.graphql?.user?.edge_followed_by.count || "2400"
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/srm-kzilla", {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        setRepos(res.data.public_repos);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCEPXeeZz6gcnciv-HjwMjsQ&key=" +
          process.env.NEXT_PUBLIC_YOUTUBE_KEY,
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((res) => {
        setSubscribers(res.data.items[0].statistics.subscriberCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container m-1 xl:m-5 flex flex-col place-items-center">
      <div>
        <div className="flex">
          <div>
            <ProgressBar
              width={800}
              widthmob={280}
              percent={0.7}
              color={"rgb(14,189,150)"}
              gif={"/images/Comp-6.gif"}
              stats={`${followers} followers`}
            />
          </div>

          <div>
            <img
              src="/images/insta_icon.png"
              className="h-8 xl:h-12 my-2 mx-1 xl:mt-7"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <ProgressBar
              width={700}
              widthmob={200}
              percent={0.5}
              color={"#FFF2CC"}
              gif={"/images/Comp-7.gif"}
              stats={`${repos} repositories`}
            />
          </div>
          <div>
            <img
              src="/images/github_icon.png"
              className="h-8 xl:h-12  my-2 mx-1 xl:mt-7"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <ProgressBar
              width={1300}
              widthmob={300}
              percent={0.8}
              color={"rgb(79,168,248)"}
              gif={"/images/Comp-8.gif"}
              stats={`${subscribers} subscribers`}
            />
          </div>
          <div>
            <img
              src="/images/youtube_icon.png"
              className="h-8 xl:h-12  my-2 mx-1 xl:mt-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
