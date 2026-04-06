import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import YtVideoPreview from "./YtVideoPreview";

export default function ProjectsSection() {
  // I want this to be a grid format with demo/preview images that have hover animations
  return (
    <>
      <h1 className="text-6xl text-center m-4">Projects</h1>
      <div className="min-w-2xl w-5xl mx-auto grid grid-cols-2 gap-16 m-2">
        {/* Project 1 this website, not just the portfolio page */}
        <div className="text-center m-4">
          <h3 className="text-2xl">SpiffySoft Twitch WebApp</h3>
          <p> Description here</p>
        </div>
        <Card className="min-w-xs h-auto hover:cursor-pointer transition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200" 
            onClick={() => {window.open("https://github.com/Spiffy07/AnotherTwitchApp", "_blank")}}>
          <img src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/AnotherTwitchAppDemo.gif" />
        </Card>
        {/* Project 2 */}
        <Card className="min-w-xs h-auto hover:cursor-pointer transition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200" 
            onClick={() => {window.open("https://github.com/Spiffy07/brokeBot", "_blank")}}>
          <img src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/BrokebotPreview.png"/>
        </Card>
        <div className="text-center m-4">
          <h3 className="text-2xl font-sans">
            Interactive Twitch Bot "BrokeBot"
          </h3>
          <p> Description here</p>
        </div>
        {/* Project 3 */}
        <div className="text-center m-4">
          <h3 className="text-2xl font-sans">Unreal Engine 5 Castle"</h3>
          <p> Description here</p>
        </div>
        <Card className="min-w-xs h-auto hover:cursor-pointer transition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200"
          onClick={() => {window.open("https://github.com/Spiffy07/CastleEnvironment", "_blank")}}>
          <YtVideoPreview
            ytVideoId="F6z8ensqAYg"
            startTimeInSeconds={155}
          />
        </Card>
      </div>
    </>
  );
}
