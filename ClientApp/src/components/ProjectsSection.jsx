import React from "react";
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

export default function ProjectsSection() {
  // I want this to be a grid format with demo/preview images that have hover animations

  return (
    <div className="bg-slate-900/40 backdrop-blur-md rounded-xl py-2">
      <h1 className="text-6xl text-center pt-4 pb-2">Projects</h1>
      <div className="w-auto m-8 gap-8 flex-col lg:grid lg:grid-cols-2">
        {/* Project 1 this website, not just the portfolio page */}
        <div className="text-center m-4">
          <h3 className="text-2xl">Twitch WebApp</h3>
          <p> Description here</p>
        </div>
        <Card
          className={` h-auto hover:cursor-pointer ${cardStyle} lg:origin-right hover:scale-120 w-auto`}
          onClick={() => {
            window.open(urlTwitchApp, "_blank");
          }}
        >
          <img src={demoTwitchApp} />
        </Card>
        {/* Project 2 */}
        <Card
          className={`hidden lg:block h-auto hover:cursor-pointer ${cardStyle} origin-left hover:scale-120`}
          onClick={() => {
            window.open(urlBrokeBot, "_blank");
          }}
        >
          <img src={demoBrokeBot} />
        </Card>
        <div className="text-center m-4">
          <h3 className="text-2xl font-sans">
            Interactive Twitch Bot "BrokeBot"
          </h3>
          <p> Description here</p>
        </div>
        <Card
          className={`lg:hidden h-auto hover:cursor-pointer ${cardStyle} hover:scale-120`}
          onClick={() => {
            window.open(urlBrokeBot, "_blank");
          }}
        >
          <img src={demoBrokeBot} />
        </Card>
        {/* Project 3 */}
        <div className="text-center m-4">
          <h3 className="text-2xl font-sans">Unreal Engine 5 Castle"</h3>
          <p> Description here</p>
        </div>
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
          <div className="lg:hidden">
            <img src={demoCastleGif} />
          </div>
        </Card>
      </div>
    </div>
  );
}
