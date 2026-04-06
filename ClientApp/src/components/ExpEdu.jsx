import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExpEdu() {
  return (
    <Card
      className="group w-5xl min-w-[675px] m-4 transition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200"
    >
      <Tabs defaultValue="experience">
        <TabsList variant="line" className="mx-auto">
          <TabsTrigger value="experience" className="text-2xl hover:cursor-pointer">
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="text-2xl hover:cursor-pointer">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Software Developer</CardTitle>
              <CardDescription>
                <ul
                  className="list-disc pl-5 marker:text-blue-500 text-lg transition-all duration-1000 
                      group-hover:duration-200 group-hover:marker:text-white group-hover:brightness-200"
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
                  className="list-disc pl-5 marker:text-blue-500 text-lg transition-all duration-1000 
                      group-hover:duration-200 group-hover:marker:text-white group-hover:brightness-200"
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
              <CardDescription
                className="transition-all duration-1000 
                      group-hover:duration-200 group-hover:marker:text-white group-hover:brightness-200"
              >
                GPA: 3.92
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
