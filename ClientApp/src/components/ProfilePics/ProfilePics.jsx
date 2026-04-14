import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const profilePicOne = "https://avatars.githubusercontent.com/u/129478296?v=4";
const profilePicTwo = "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/logo2YT.png";

export default function ProfilePics() {
  return (
    <div className="flex relative justify-center items-center ">
      <Avatar
        className="relative transition-all z-3 peer w-25 h-25
                    sm:w-50 sm:h-50 md:translate-x-15 
                    hover:w-70 hover:h-70 hover:translate-x-15 hover:z-4"
      >
        <AvatarImage src={profilePicOne} />
      </Avatar> 
      <Avatar
        className="relative transition-all peer z-2 w-25 h-30
                    sm:w-49 sm:h-60 md:-translate-x-15
                    hover:w-65 hover:h-80 hover:-translate-x-15 hover:z-4 "
      >
        <AvatarImage src={profilePicTwo} />
      </Avatar>
      <div
        className="absolute items-center mx-auto -inset-1 rounded-full z-1
                    bg-linear-to-r from-white to-blue-500 blur opacity-25 animate-pulse
                    peer-hover:opacity-100 transition duration-1000 peer-hover:duration-200 peer-hover:scale-115
                    sm:w-full md:w-2xs"
      ></div>
    </div>
  );
}
