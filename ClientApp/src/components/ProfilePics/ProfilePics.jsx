import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const profilePicOne = "https://avatars.githubusercontent.com/u/129478296?v=4";
const profilePicTwo = "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/Media/logo2YT.png";

export default function ProfilePics() {
  return (
    <div className="flex w-max min-w-[575px] relative justify-center items-center h-60 m-8">
      <Avatar
        className="relative transition-all w-50 h-50 translate-x-15 z-1 peer
                    hover:w-70 hover:h-70 hover:translate-x-15 hover:z-2"
      >
        <AvatarImage src={profilePicOne} />
      </Avatar>
      <Avatar
        className="relative transition-all w-49 h-60 -translate-x-15 peer
                    hover:w-65 hover:h-80 hover:-translate-x-15 hover:z-2 "
      >
        <AvatarImage src={profilePicTwo} />
      </Avatar>
      <div
        className="absolute items-center mx-auto max-w-2xs -inset-1 rounded-full -z-2
                    bg-linear-to-r from-white to-blue-500 blur opacity-25 animate-pulse
                    peer-hover:opacity-100 transition duration-1000 peer-hover:duration-200 peer-hover:scale-115"
      ></div>
    </div>
  );
}
