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
      <div className="min-w-3xl w-5xl mx-auto grid grid-cols-2 gap-16 m-2">
        {/* Project 1 */}
        <div>project 1 description</div>
        <Card className="min-w-xs h-auto">
          <YtVideoPreview ytVideoId="F6z8ensqAYg" startTimeInSeconds={155} />
        </Card>
        {/* Project 2 */}
        <Card className="min-w-xs h-auto">
          
        </Card>
        <div>project 2 description</div>
        {/* Project 3 */}
      </div>
    </>
  );
}
