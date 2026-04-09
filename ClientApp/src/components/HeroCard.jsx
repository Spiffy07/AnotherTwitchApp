import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  cardStyle,
} from "@/components/ui/card";
import SocialIcons from "@/components/SocialIcons";

const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";

export default function () {
  return (
    <Card
      className={`group mx-auto h-auto min-w-[675px] w-max m-4 relative text-2xl ${cardStyle}`}
    >
      {/* <div className="absolute w-full inset-0 bg-linear-to-br from-gray-800 to-blue-800 
                    rounded-lg blur opacity-10 
                    group-hover:opacity-0 transition duration-500 group-hover:duration-200">
            </div> */}
      <CardHeader>
        <CardTitle>Thomas T.</CardTitle>
        <CardTitle>Full-Stack Developer</CardTitle>
        <CardContent className=" dark:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#0ea5e9]">
          Hello, World!
        </CardContent>
        <CardDescription>
          <p className={`text-lg ${cardChildrenHover}`}>
            I am an Asian-American full-stack software developer and Twitch
            streamer. My content-creation and development projects has reached a
            wide audience with varying interests.
          </p>
        </CardDescription>
        <CardFooter className="flex h-10 items-center justify-center">
          <SocialIcons />
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
