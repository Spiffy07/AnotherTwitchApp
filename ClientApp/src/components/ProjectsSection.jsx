import React, { forwardRef } from "react";
import {
  Card,
  cardStyle,
} from "@/components/ui/card";
import YtVideoPreview from "./YtVideoPreview";

const demoTwitchApp =
  "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/src/Media/AnotherTwitchAppDemo.gif";
const urlTwitchApp = "https://github.com/Spiffy07/AnotherTwitchApp";
const demoBrokeBot =
  "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/src/Media/BrokebotPreview.png";
const urlBrokeBot = "https://github.com/Spiffy07/brokeBot";
const demoCastleId = "G0PgG11vyC4";
const demoCastleGif =
  "https://github.com/Spiffy07/AnotherTwitchApp/blob/responsiveDesign/ClientApp/src/Media/CastleToGif.gif?raw=true";

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
          className={`text-base md:text-xl md:m-4 transition duration-500 ${projOneIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
        >
          <h3 className="text-center text-3xl">Twitch WebApp</h3>
          <br/>
          <p> 
            This Asp.NET app with React and TailwindCSS project! It uses authentication
             and authorization to for user accounts and is connected to an SQlite database.
             Also features multiple seperate controllers and models for AspIdentity and my forms.
          </p>
          <br/>
          <p>
             More features coming soon!
          </p>
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
            <img src={demoTwitchApp} alt="Another Twitch app demonstration."/>
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
            <img src={demoBrokeBot} alt="BrokeBot demonstration."/>
          </Card>
        </div>
        <div
          ref={ref}
          dataid={projTwoId}
          className={`text-base md:text-xl md:m-4 transition duration-500 ${projTwoIsVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}
        >
          <h3 className="text-center text-3xl font-sans">
            Interactive Twitch Bot "BrokeBot"
          </h3>
          <br/>
          <p>My very own custom twitch chatbot using Node.js with express websockets. 
            Used for chat commands, channel redemptions and connected with Twitch's API for back-end subscription-based event handling.
            Also connected to Google Cloud's Web API for it's Text-To-Speech feature.</p>
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
            <img src={demoBrokeBot} alt="BrokeBot Demonstration."/>
          </Card>
        </div>
        {/* Project 3 */}
        <div
          ref={ref}
          dataid={projThreeId}
          className={`text-base md:text-xl md:m-4 transition duration-500 ${projThreeIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
        >
          <h3 className="text-center text-3xl font-sans">Unreal Engine 5 Castle</h3>
          <br/>
          <p>A first-person prototype that implements UE5's expansive framework. 
            Landscape, foliage, target physics, and modular castle assets build into a blank project.
            Featuring custom menus, HUD, prototype mechanics.</p>
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
              <img src={demoCastleGif} alt="Unreal Engine 5 Castle demonstration."/>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
});
