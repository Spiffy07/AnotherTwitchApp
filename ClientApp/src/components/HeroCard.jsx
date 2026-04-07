import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const cardStyle =
  "trasition duration-1000 shadow-[0_0_20px_var(--color-blue-500)] hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200";
const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";
const iconAnimation = "ml-4 mr-4 transition-all absolute hover:size-12 hover:cursor-pointer hover:brightness-150"

const gitIconUrl = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png";
const linkedInIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png";
const twitchIconUrl = "https://cdn-icons-png.flaticon.com/512/3991/3991943.png";

export default function () {
  function handleGithubClick() {
    window.open("https://github.com/Spiffy07", "_blank");
  }
  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/thomas-tran-spiffy07/", "_blank");
  }
  function handleTwitchClick() {
    window.open("https://www.twitch.tv/spiffythomas", "_blank");
  }

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
          <p
            className={`text-lg ${cardChildrenHover}`}
          >
            I am an Asian-American full-stack software developer and Twitch
            streamer. My content-creation and development projects has reached a
            wide audience with varying interests.
          </p>
        </CardDescription>
        <CardFooter className="flex h-10 items-center justify-center">
          <Avatar
            onClick={handleGithubClick}
            className={`-translate-x-12 ${iconAnimation}`}
          >
            <AvatarImage src={gitIconUrl} />
            <AvatarFallback>Git</AvatarFallback>
          </Avatar>
          <Avatar
            onClick={handleLinkedInClick}
            className={`translate-x-0 ${iconAnimation}`}
          >
            <AvatarImage src={linkedInIconUrl} />
            <AvatarFallback>in</AvatarFallback>
          </Avatar>
          <Avatar
            onClick={handleTwitchClick}
            className={`translate-x-12 ${iconAnimation}`}
          >
            <AvatarImage src={twitchIconUrl} />
            <AvatarFallback>Twitch</AvatarFallback>
          </Avatar>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
