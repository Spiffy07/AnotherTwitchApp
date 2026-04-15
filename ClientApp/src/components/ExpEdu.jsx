import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  cardStyle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";

export default function ExpEdu() {
  return (
    <Card className={`group md:m-4 ${cardStyle}`}>
      <Tabs defaultValue="experience">
        <TabsList variant="line" className="flex flex-col md:flex-row w-full mx-auto">
          <TabsTrigger
            value="experience"
            className="text-2xl md:text-2xl hover:cursor-pointer h-11 pb-6 pt-12
              md:pb-0 md:pt-0"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-2xl md:text-2xl hover:cursor-pointer h-11 mb-6 
              md:mb-0"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Card className='bg-transparent border-0'>
            <CardHeader>
              <CardTitle className="text-sm md:text-lg">Software Developer</CardTitle>
              <CardDescription>
                <ul
                  className={`${cardChildrenHover} list-disc list-inside text-sm marker:text-blue-500 md:text-lg
                   md:list-outside md:pl-5`}
                >
                  <li className='pl-0'>put experiences here</li>
                  <li>probably like this?</li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle className="text-sm md:text-lg">Front-End Developer Intern</CardTitle>
              <CardDescription>
                <ul
                  className={`${cardChildrenHover} list-disc list-inside text-sm marker:text-blue-500 px-0
                  md:text-lg md:list-outside md:pl-5`}
                >
                  <li className='px-0'>put experiences here</li>
                  <li>probably like this?</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card className='bg-transparent border-0'>
            <CardHeader>
              <CardTitle className="md:text-lg ">
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
