import React, { forwardRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  cardStyle,
} from "@/components/ui/card";
import YtVideoPreview from "./YtVideoPreview";

const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";
const demoTwitchApp =
  "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/AnotherTwitchAppDemo.gif";
const urlTwitchApp = "https://github.com/Spiffy07/AnotherTwitchApp";
const demoBrokeBot =
  "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/BrokebotPreview.png";
const urlBrokeBot = "https://github.com/Spiffy07/brokeBot";
const demoCastleId = "G0PgG11vyC4";
const demoCastleGif =
  "https://github.com/Spiffy07/AnotherTwitchApp/blob/responsiveDesign/ClientApp/Media/CastleToGif.gif?raw=true";

export default forwardRef(function ProjectsSection(props, ref) {
  const projOneId = "projectone";
  const projOneMediaId = "projectonemedia";
  const projOneIsVisible = props.inViewSet.has(projOneId);
  const projOneMediaIsVisible = props.inViewSet.has(projOneMediaId);

  const projTwoId = "projecttwo";
  const projTwoMediaId = "projecttwomedia";
  const projTwoIsVisible = props.inViewSet.has(projTwoId);
  const projTwoMediaIsVisible = props.inViewSet.has(projTwoMediaId);

  // const projTwoGridId = "projecttwogrid";
  const projTwoMediaGridId = "projecttwomediagrid";
  // const projTwoGridIsVisible = props.inViewSet.has(projTwoGridId);
  const projTwoMediaGridIsVisible = props.inViewSet.has(projTwoMediaGridId);

  const projThreeId = "projectthree";
  const projThreeMediaId = "projectthreemedia";
  const projThreeIsVisible = props.inViewSet.has(projThreeId);
  const projThreeMediaIsVisible = props.inViewSet.has(projThreeMediaId);

  return (
    <div className="bg-slate-900/40 backdrop-blur-md rounded-xl py-2">
      <h1 className="text-6xl text-center pt-4 pb-2">Projects</h1>
      <div className="w-auto m-8 gap-8 flex-col lg:grid lg:grid-cols-2">
        {/* Project 1 this website, not just the portfolio page */}
        <div
          ref={ref}
          dataid={projOneId}
          className={`text-center m-4 transition duration-500 ${projOneIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
        >
          <h3 className="text-2xl">Twitch WebApp</h3>
          <p> Description here</p>
        </div>
        <div
          ref={ref}
          dataid={projOneMediaId}
          className={`transition duration-500 ${projOneMediaIsVisible ? "opacity-100" : "opacity-0 -translate-x-10 lg:translate-x-10"}`}
        >
          <Card
            className={` h-auto hover:cursor-pointer ${cardStyle} lg:origin-right hover:scale-120 w-auto`}
            onClick={() => {
              window.open(urlTwitchApp, "_blank");
            }}
          >
            <img src={demoTwitchApp} />
          </Card>
        </div>
        {/* Project 2 */}
        <div
          ref={ref}
          dataid={projTwoMediaGridId}
          className={`hidden lg:block h-auto hover:cursor-pointer  transition duration-500 ${projTwoMediaGridIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
        >
          <Card
            className={`${cardStyle} origin-left hover:scale-120`}
            onClick={() => {
              window.open(urlBrokeBot, "_blank");
            }}
          >
            <img src={demoBrokeBot} />
          </Card>
        </div>
        <div
          ref={ref}
          dataid={projTwoId}
          className={`text-center m-4 transition duration-500 ${projTwoIsVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}
        >
          <h3 className="text-2xl font-sans">
            Interactive Twitch Bot "BrokeBot"
          </h3>
          <p> Description here</p>
        </div>
        <div
          ref={ref}
          dataid={projTwoMediaId}
          className={`lg:hidden h-auto hover:cursor-pointer transition duration-500 ${projTwoMediaIsVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}
        >
          <Card
            className={`${cardStyle} hover:scale-120`}
            onClick={() => {
              window.open(urlBrokeBot, "_blank");
            }}
          >
            <img src={demoBrokeBot} />
          </Card>
        </div>
        {/* Project 3 */}
        <div
          ref={ref}
          dataid={projThreeId}
          className={`text-center m-4 transition duration-500 ${projThreeIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
        >
          <h3 className="text-2xl font-sans">Unreal Engine 5 Castle"</h3>
          <p> Description here</p>
        </div>
        <div
          ref={ref}
          dataid={projThreeMediaId}
          className={`transition duration-500 ${projThreeMediaIsVisible ? "opacity-100" : "opacity-0 -translate-x-10 lg:translate-x-10"}`}
        >
          <Card
            className={`h-auto hover:cursor-pointer ${cardStyle} lg:origin-right hover:scale-120`}
            onClick={() => {
              window.open(
                "https://github.com/Spiffy07/CastleEnvironment",
                "_blank",
              );
            }}
          >
            <div className="hidden lg:block">
              {/* <div> */}
              <YtVideoPreview
                ytVideoId={demoCastleId}
                startTimeInSeconds={0}
                playbackSpeed={1.5}
              />
            </div>
            <div className="mx-auto lg:hidden">
              <img src={demoCastleGif} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
});
