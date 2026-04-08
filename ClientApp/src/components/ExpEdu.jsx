import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cardStyle =
  "trasition duration-1000 shadow-[0_0_20px_var(--color-blue-500)] hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200 hover:scale-110 hover:z-2";
const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";

export default function ExpEdu() {
  return (
    <Card className={`group w-5xl min-w-[675px] m-4 ${cardStyle}`}>
      <Tabs defaultValue="experience">
        <TabsList variant="line" className="mx-auto">
          <TabsTrigger
            value="experience"
            className="text-2xl hover:cursor-pointer"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-2xl hover:cursor-pointer"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Software Developer</CardTitle>
              <CardDescription>
                <ul
                  className={`list-disc pl-5 marker:text-blue-500 text-lg ${cardChildrenHover}`}
                >
                  <li>put experiences here</li>
                  <li>probably like this?</li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Front-End Developer Intern</CardTitle>
              <CardDescription>
                <ul
                  className={`list-disc pl-5 marker:text-blue-500 text-lg ${cardChildrenHover}`}
                >
                  <li>put experiences here</li>
                  <li>probably like this?</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg ">
                Bachelor of Science in Computer Science
              </CardTitle>
              <CardDescription className={cardChildrenHover}>
                GPA: 3.92
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
