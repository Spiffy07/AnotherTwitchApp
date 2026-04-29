import React, { forwardRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  cardStyle,
} from "@/components/ui/card";

const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";

export default forwardRef(function SkillsSection(props, ref) {
  const summaryDataId = "skillssummary";
  const detailDataId = "skillsdetail";
  const summaryIsVisible = props.inViewSet.has(summaryDataId);
  const detailIsVisible = props.inViewSet.has(detailDataId);

  return (
    <div className={`mx-auto m-2 md:grid md:grid-cols-3 md:gap-4`}>
      <h1 className="col-span-3 text-center text-6xl m-4">Skills</h1>
      <div
        ref={ref}
        dataid={summaryDataId}
        className={`group col-span-1 transition duration-500 ${summaryIsVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}
      >
        <Card className={`${cardStyle} md:min-h-60`}>
          <CardHeader className={cardChildrenHover}>
            <CardTitle>Front End</CardTitle>
            <CardDescription>JavaScript, React, Tailwind</CardDescription>
            <CardTitle>Back End</CardTitle>
            <CardDescription>C# .NET, Node.js</CardDescription>
            <CardTitle>Tools and etc.</CardTitle>
            <CardDescription>
              Github, Visual Studios/VS Code, Figma, Twitch
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div
        ref={ref}
        dataid={detailDataId}
        className={`group col-span-2 transition duration-500 md:delay-200 ${detailIsVisible ? "opacity-100" : "opacity-0 -translate-x-10 md:-translate-x-80"}`}
      >
        <Card className={`group col-span-2 ${cardStyle} md:min-h-60`}>
          <div className={`mx-5 ${cardChildrenHover}`}>
            <p>
              My primary focus is developing this full-stack webapp for a better
              Twitch experience.
            </p>
            <br />
            <p>
              I have myriad other skills like C++, Unreal Engine 5, SQL,
              OpenShots, PC building, and more!
            </p>
            <br />
            <p>Full resume is available upon request.</p>
          </div>
        </Card>
      </div>
    </div>
  );
});
