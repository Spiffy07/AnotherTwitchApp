import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const iconAnimation =
  "transition-all hover:scale-150 hover:cursor-pointer hover:brightness-150";

const gitIconUrl =
  "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png";
const linkedInIconUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png";
const twitchIconUrl = "https://cdn-icons-png.flaticon.com/512/3991/3991943.png";

export default function SocialIcons() {
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
    <div className='grid grid-cols-3'>
      <Avatar
        onClick={handleGithubClick}
        className={`${iconAnimation} mx-3`}
      >
        <AvatarImage src={gitIconUrl} />
        <AvatarFallback>Git</AvatarFallback>
      </Avatar>
      <Avatar
        onClick={handleLinkedInClick}
        className={`${iconAnimation} mx-3`}
      >
        <AvatarImage src={linkedInIconUrl} />
        <AvatarFallback>in</AvatarFallback>
      </Avatar>
      <Avatar
        onClick={handleTwitchClick}
        className={`${iconAnimation} mx-3`}
      >
        <AvatarImage src={twitchIconUrl} />
        <AvatarFallback>Twitch</AvatarFallback>
      </Avatar>
    </div>
  );
}
