import React from "react";
import {Avatar, AvatarImage} from '@/components/ui/avatar';

export default function ProfilePics() {
    return (
        <div className="flex relative justify-center items-center h-60 m-10 group">
            <Avatar
                className="absolute transition-all w-50 h-50 -translate-x-10 z-1 peer
                    hover:w-75 hover:h-75 hover:-translate-x-5 hover:z-2"
            >
                <AvatarImage src="https://avatars.githubusercontent.com/u/129478296?v=4" />
            </Avatar>
            <Avatar
                className="absolute transition-all w-49 h-60 translate-x-10 
                    hover:w-65 hover:h-80 hover:translate-x-5 hover:z-2 peer-hover:translate-x-20"
            >
                <AvatarImage src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/logo2YT.png" />
            </Avatar>
        </div>
    );
}
