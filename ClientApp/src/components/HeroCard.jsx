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

export default function () {
    function handleGithubClick() {
        window.open("https://github.com/Spiffy07", "_blank");
    }
    function handleLinkedInClick() {
        window.open(
            "https://www.linkedin.com/in/thomas-tran-spiffy07/",
            "_blank",
        );
    }
    function handleTwitchClick() {
        window.open("https://www.twitch.tv/spiffythomas", "_blank");
    }

    return (
        <Card className="mx-auto h-56 w-[575px] m-4 shadow-[0_0_20px_var(--color-blue-500)] relative group">
            <div className="absolute w-full inset-0 bg-linear-to-br from-gray-800 to-blue-800 
                    rounded-lg blur opacity-10 
                    group-hover:opacity-0 transition duration-1000 group-hover:duration-200">
            </div>
            <CardHeader>
                <CardTitle>Thomas Tran</CardTitle>
                <CardTitle>Full-Stack Developer</CardTitle>
                <CardContent className='text-white [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#0ea5e9]'>Hello, World!</CardContent>
                <CardDescription>
                    I am an Asian-American full-stack software developer and
                    Twitch streamer. My content-creation and development
                    projects has reached a wide audience with varying interests.
                </CardDescription>
                <CardFooter className="flex h-10 items-center justify-center">
                    <Avatar
                        onClick={handleGithubClick}
                        className="ml-4 mr-4 transition-all absolute -translate-x-12 
                            hover:size-12 hover:cursor-pointer hover:brightness-150"
                    >
                        <AvatarImage src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" />
                        <AvatarFallback>Git</AvatarFallback>
                    </Avatar>
                    <Avatar
                        onClick={handleLinkedInClick}
                        className="ml-4 mr-4 transition-all absolute translate-x-0 
                            hover:size-12 hover:cursor-pointer hover:brightness-150"
                    >
                        <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png" />
                        <AvatarFallback>in</AvatarFallback>
                    </Avatar>
                    <Avatar
                        onClick={handleTwitchClick}
                        className="ml-4 mr-4 transition-all absolute translate-x-12 
                            hover:size-12 hover:cursor-pointer hover:brightness-150"
                    >
                        <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3991/3991943.png" />
                        <AvatarFallback>Twitch</AvatarFallback>
                    </Avatar>
                </CardFooter>
            </CardHeader>
        </Card>
    );
}
