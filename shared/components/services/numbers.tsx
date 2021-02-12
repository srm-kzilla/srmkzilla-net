import React from "react";

interface ProgressProps {
  width: number;
  percent: number;
  color: string;
  gif: any;
  stats: string;
}

export var ProgressBar = (props: ProgressProps) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(props.percent * props.width);
  });

  return (
    <div>
      <div
        className="bg-baseBlack rounded-md flex m-3"
        style={{ width: props.width }}
      >
        <div
          style={{ width: `${value}px`, backgroundColor: `${props.color}` }}
          className=" h-10 rounded-md transition delay-500"
        />
        <div>
          <img src={props.gif} className="w-10" />
        </div>
        <div>
          <p className="text-white mt-2 z-50">{props.stats}</p>
        </div>
      </div>
    </div>
  );
};

class Numbers extends React.Component {
  render() {
    return (
      <div className="container m-5">
        <div className="div">
          <div className="flex">
            <div>
              <ProgressBar
                width={600}
                percent={0.7}
                color={"#22D296"}
                gif={"/images/greenwave.gif"}
                stats={"7890 followers"}
              />
            </div>
            <div>
              <img src="/images/insta_icon.png" className="h-7 my-4" />
            </div>
          </div>
          <div className="flex">
            <div>
              <ProgressBar
                width={600}
                percent={0.4}
                color={"#FFF2CC"}
                gif={"/images/whitewave.gif"}
                stats={"54 repositories"}
              />
            </div>
            <div>
              <img src="/images/github_icon.png" className="h-7 my-4" />
            </div>
          </div>
          <div className="flex">
            <div>
              <ProgressBar
                width={600}
                percent={0.6}
                color={"#58ACF5"}
                gif={"/images/bluewave.gif"}
                stats={"2698 subscribers"}
              />
            </div>
            <div>
              <img src="/images/youtube_icon.png" className="h-7 my-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Numbers;
