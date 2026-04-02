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
        window.open('https://github.com/Spiffy07', '_blank');
    }
    function handleLinkedInClick() {
        window.open('https://www.linkedin.com/in/thomas-tran-spiffy07/', '_blank');
    }
    function handleTwitchClick() {
        window.open('https://www.twitch.tv/spiffythomas', '_blank');
    }

    return (
        <Card className="mx-auto h-56 w-[575px] m-4">
            <CardHeader>
                <CardTitle>Thomas Tran</CardTitle>
                <CardTitle>Full-Stack Developer</CardTitle>
                <CardContent className="">Hello, World!</CardContent>
                <CardDescription>
                    I am an Asian-American full-stack software developer and
                    Twitch streamer. My content-creation and development
                    projects has reached a wide audience with varying interests.
                </CardDescription>
                <CardFooter className='flex h-10 items-center justify-center'>
                    <Avatar className='ml-4 mr-4 transition-all absolute -translate-x-12 hover:size-12 hover:cursor-pointer' onClick={handleGithubClick}>
                        <AvatarImage src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" />
                        <AvatarFallback>Git</AvatarFallback>
                    </Avatar>
                    <Avatar className='ml-4 mr-4 transition-all absolute translate-x-0 hover:size-12 hover:cursor-pointer' onClick={handleLinkedInClick}>
                        <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png" />
                        <AvatarFallback>in</AvatarFallback>
                    </Avatar>
                    <Avatar className='ml-4 mr-4 transition-all absolute translate-x-12 hover:size-12 hover:cursor-pointer' onClick={handleTwitchClick}>
                        <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3991/3991943.png" />
                        <AvatarFallback>Twitch</AvatarFallback>
                    </Avatar>
                </CardFooter>
            </CardHeader>
        </Card>
    );
}
