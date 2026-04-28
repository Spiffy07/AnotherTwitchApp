import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  cardStyle,
} from "@/components/ui/card";
import ProfilePics from "@/components/ProfilePics/ProfilePics";
import SocialIcons from "@/components/SocialIcons";

export default function ContactCard() {
  return (
    <Card className={`${cardStyle} items-center`}>
      <div
        className="h-30 scale-80 -translate-y-3
            sm:h-30 sm:scale-40 sm:-translate-y-6"
      >
        <ProfilePics />
      </div>
      <CardHeader className="justify-center p-0 text-center w-full">
        <CardTitle className="text-2xl">Thomas T.</CardTitle>
        <CardContent className="text-xl">Full-Stack Developer</CardContent>
      </CardHeader>
      <CardDescription>
        <div
          className="items-center text-center 
              md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 md:text-left"
        >
          <p>Stuff here</p>
          <div className="hidden md:block">
            <Card />
          </div>
          <div className="pt-4 md:pt-0">
            <SocialIcons />
          </div>
        </div>
      </CardDescription>
    </Card>
  );
}
