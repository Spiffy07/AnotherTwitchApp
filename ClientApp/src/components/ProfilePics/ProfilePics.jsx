import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const profilePicOne = "https://avatars.githubusercontent.com/u/129478296?v=4";
const profilePicTwo = "https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/src/Media/logo2YT.png";

export default function ProfilePics() {
  return (
    <div className="grid place-items-center my-4 max-h-60">
      <Avatar
        className="col-start-1 row-start-1 transition-all z-3 peer w-25 h-25 -translate-x-14
                    sm:w-50 sm:h-50 sm:-translate-x-26 lg:-translate-x-15
                    hover:scale-140 hover:-translate-x-5 hover:z-4"
      >
        <AvatarImage src={profilePicOne} />
      </Avatar> 
      <Avatar
        className="col-start-1 row-start-1 transition-all peer z-2 w-25 h-30 translate-x-14
                    sm:w-49 sm:h-60 sm:translate-x-26 lg:translate-x-15
                    hover:scale-140 hover:translate-x-5 hover:z-4 "
      >
        <AvatarImage src={profilePicTwo} />
      </Avatar>
      <div
        className="col-start-1 row-start-1 items-center mx-auto -inset-1 rounded-full z-1 h-full
                    w-[280px] sm:w-[520px] lg:w-[420px]
                    bg-linear-to-r from-white to-blue-500 blur opacity-25 animate-pulse
                    peer-hover:opacity-100 transition duration-1000 peer-hover:duration-200 peer-hover:scale-y-120"
      />
    </div>
  );
}
