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
    <Card className={`w-5xl ${cardStyle} items-center`}>
      <div className="scale-80">
        <ProfilePics />
      </div>
      <CardHeader className="justify-center p-0 text-center text-nowrap">
        <CardTitle className="text-3xl">
          Thomas Tran
        </CardTitle>
        <CardContent className="text-2xl">
            Software Developer and Content Creator
        </CardContent>
      </CardHeader>
      <CardDescription>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <p>Stuff here</p>
            <Card />
            <SocialIcons />
        </div>
      </CardDescription>
    </Card>
  );
}
