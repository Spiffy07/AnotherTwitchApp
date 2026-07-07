import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  cardStyle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersection } from "@/hooks/useIntersection";

const cardChildrenHover =
  "transtion duration-1000 group-hover:duration-200 group-hover:brightness-200";

const TAB_ORDER = ["experience", "education"];

export default forwardRef(function ExpEdu(props, ref) {
  const isVisible = props.inViewSet.has(props.dataid);
  const [activeTab, setActiveTab] = useState("experience");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newValue) => {
    const currentIndex = TAB_ORDER.indexOf(activeTab);
    const nextIndex = TAB_ORDER.indexOf(newValue);

    setDirection(nextIndex < currentIndex ? 0 : 1);
    setActiveTab(newValue);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40, // Enters from the right or left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : 40, // Exits out to the left or right
      opacity: 0,
    }),
  };

  return (
    <Card className={`group md:m-4 ${cardStyle} `}>
      <div
        ref={ref}
        dataid={props.dataid}
        className={`transition duration-500 min-h-100 md:min-h-[570px] ${isVisible ? "scale-100 opacity-100" : "scale-70 opacity-0"}`}
      >
        <Tabs
          defaultValue="experience"
          value={activeTab}
          onValueChange={handleTabChange}
        >
          <TabsList
            variant="line"
            className="flex flex-col md:flex-row w-full mx-auto"
          >
            <TabsTrigger
              value="experience"
              className="text-2xl md:text-2xl hover:cursor-pointer h-11 pb-6 pt-12
              md:pb-0 md:pt-0"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-2xl hover:cursor-pointer h-11 mb-6 
              md:mb-0"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait" custom={direction}>
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <Card className="bg-transparent border-0">
                  <CardHeader>
                    <CardTitle className="text-sm md:text-lg">
                      Front-End Designer
                    </CardTitle>
                    <CardDescription>
                      <ul
                        className={`${cardChildrenHover} list-disc list-inside text-sm marker:text-blue-500 md:text-lg
                   md:list-outside md:pl-5`}
                      >
                        <li className="pl-0">
                          Modernized 18 webpages with custom designs.
                        </li>
                        <li>
                          Implemented "WCAG AAA" accessibility standards through
                          element design, color, font sizes.
                        </li>
                        <li>
                          Deployed SEO best practices to increase website
                          visitors.
                        </li>
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardHeader>
                    <CardTitle className="text-sm md:text-lg">
                      Software Application Developer
                    </CardTitle>
                    <CardDescription>
                      <ul
                        className={`${cardChildrenHover} list-disc list-inside text-sm marker:text-blue-500 px-0
                  md:text-lg md:list-outside md:pl-5`}
                      >
                        <li className="px-0">
                          Implement proprietary REST connections to enable
                          feature functionality.
                        </li>
                        <li>
                          Integrated third party APIs for connections to
                          Bluetooth peripherals.
                        </li>
                        <li>
                          Optimized C++ application software by replacing
                          outdated APIs
                        </li>
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <Card className="bg-transparent border-0">
                  <CardHeader>
                    <CardTitle className="md:text-lg ">
                      Bachelor of Science in Computer Science
                    </CardTitle>
                    <CardDescription className={cardChildrenHover}>
                      GPA: 3.92
                      <br />
                    </CardDescription>
                    <CardTitle className="md:text-lg ">Courses</CardTitle>
                    <CardDescription>
                      <ul
                        className={`${cardChildrenHover} list-disc list-inside text-sm marker:text-blue-500 px-0
                  md:text-lg md:list-outside md:pl-5`}
                      >
                        <li>Software Engineering</li>
                        <li>Data Structures</li>
                        <li>Algorithms and Complexity</li>
                        <li>Databases</li>
                        <li>Client-Server Programming</li>
                        <li>Many more!</li>
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </Card>
  );
});
