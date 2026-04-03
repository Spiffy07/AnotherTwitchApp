import React from "react";
import {Avatar, AvatarImage} from '@/components/ui/avatar';

export default function ProfilePics() {
    return (
        <div className="flex w-full relative justify-center items-center h-60 m-8 group">
            <Avatar
                className="relative transition-all w-50 h-50 translate-x-15 z-1 peer
                    hover:w-70 hover:h-70 hover:translate-x-15 hover:z-2"
            >
                <AvatarImage src="https://avatars.githubusercontent.com/u/129478296?v=4" />
            </Avatar>
            <Avatar
                className="relative transition-all w-49 h-60 -translate-x-15 
                    hover:w-65 hover:h-80 hover:-translate-x-15 hover:z-2 "
            >
                <AvatarImage src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/logo2YT.png" />
            </Avatar>
        </div>
    );
}
