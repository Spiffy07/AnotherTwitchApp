import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <div className="min-w-2xl w-5xl mx-auto grid grid-cols-3 gap-4 m-2">
      <h1 className="col-span-3 text-center text-6xl m-4">Skills</h1>
      <Card className=" group trasition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200">
        <CardHeader className='transtion duration-1000 group-hover:duration-200 group-hover:brightness-200'>
          <CardTitle>Front End</CardTitle>
          <CardDescription>JavaScript, React, Tailwind</CardDescription>
          <CardTitle>Back End</CardTitle>
          <CardDescription>C# .NET, Node.js, </CardDescription>
          <CardTitle>Tools</CardTitle>
          <CardDescription>Git, Github, Visual Studios/VS Code</CardDescription>
        </CardHeader>
      </Card>
      <Card className="group col-span-2 transition duration-1000 shadow-[0_0_20px_var(--color-blue-500)]
              hover:shadow-[0_0_20px_var(--color-white)] hover:duration-200">
        <div className="mx-5 transtion duration-1000 group-hover:duration-200 group-hover:brightness-200">
          <p>
            My primary focus is developing this full-stack webapp for a better
            Twitch experience.
          </p>
          <br />
          <p>
            I have myriad other skills like C++, Unreal Engine 5, MySQL, SQLite, etc.
          </p>
          <br />
          <p>My full resume is available upon request.</p>
        </div>
      </Card>
    </div>
  );
}
