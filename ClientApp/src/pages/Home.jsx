import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import ProfilePics from "@/components/ProfilePics/ProfilePics";
import HeroCard from "@/components/HeroCard";
import ExpEdu from "@/components/ExpEdu";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useIntersection } from "@/hooks/useIntersection";

export function Home() {
  const [inViewSet, registerCallback] = useIntersection(
    { threshold: 0.5 },
    false,
  );
    const containerRef = useRef(null);


  // 1. Track scroll progress relative to this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress (0 to 1) to different "speeds" (pixel offsets)
  // Background moves slowly, Foreground moves faster
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);


  return (
    <div ref={containerRef} className="relative h-auto w-full overflow-hidden">
      {/* Slow Background Layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 h-full w-full -z-2 bg-[url('..\\ClientApp\\Media\\background.png')] bg-top bg-no-repeat"
      />

      {/* Faster Midground Layer */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 -z-1 w-full bg-[url('..\\ClientApp\\Media\\planetTest.png')]  bg-no-repeat bg-position-[5%_20%]"
      />

      {/* Normal Scrolling Content */}
      <div
        className="grid grid-cols-1 gap-y-4 items-center align-middle min-h-screen mx-auto w-[full]
               md:gap-4 lg:px-0 px-4 md:grid-cols-2 lg:grid-cols-12 m-6 lg:m-0"
      >
        <div className="col-span-12">
          <FloatingNavbar />
        </div>
        <div className="pt-16 pb-8 col-span-12">
          <ProfilePics />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto text-center w-full">
          <HeroCard />
        </div>
        <section id="experience" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto">
          <ExpEdu
            ref={registerCallback}
            inViewSet={inViewSet}
            dataid="expedu"
          />
        </div>
        <section id="projects" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="w-full col-span-12 lg:col-start-2 lg:col-span-10">
          <ProjectsSection ref={registerCallback} inViewSet={inViewSet} />
        </div>
        <div className="col-span-12">
          <section id="skills" />
          <br />
          <br />
        </div>
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <SkillsSection ref={registerCallback} inViewSet={inViewSet} />
        </div>
        <section id="contact" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto">
          <ContactCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}
