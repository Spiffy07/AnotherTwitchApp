import React, { Component } from "react";

import ProfilePics from "@/components/ProfilePics/ProfilePics";
import HeroCard from "@/components/HeroCard";
import ExpEdu from "@/components/ExpEdu";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCard from "@/components/ContactCard";
import { Card } from "@/components/ui/card";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useIntersection } from "@/hooks/useIntersection";

export function Home() {
  const [inViewSet, registerCallback] = useIntersection({ threshold: .3 }, false);

    return (
      <div
        className="grid grid-cols-1 gap-y-4 items-center align-middle min-h-screen mx-auto w-[full]
               md:gap-4 md:px-4 md:grid-cols-2 lg:grid-cols-12 md:m-6"
      >
        <div className="col-span-12">
          <FloatingNavbar />
        </div>
        <div className="pt-16 pb-8 col-span-12">
          <ProfilePics />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto text-center w-full">
          <HeroCard/>
        </div>
        <section id="experience" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto">
          <ExpEdu ref={registerCallback} inViewSet={inViewSet} dataid='expedu'/>
        </div>
        <section id="projects" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="w-full col-span-12 lg:col-start-2 lg:col-span-10">
          <ProjectsSection />
        </div>
        <div className="col-span-12">
        <section id="skills" />
          <br />
          <br />
        </div>
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <SkillsSection ref={registerCallback} inViewSet={inViewSet} dataid='skills'/>
        </div>
        <section id="contact" />
        <div className="col-span-12">
          <br />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto">
          <ContactCard />
        </div>
      </div>
    );
  }

