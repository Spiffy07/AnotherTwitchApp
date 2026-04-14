import React, { Component } from "react";

import ProfilePics from "@/components/ProfilePics/ProfilePics";
import HeroCard from "@/components/HeroCard";
import ExpEdu from "@/components/ExpEdu";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCard from "@/components/ContactCard";
import { Card } from "@/components/ui/card";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div
        className="grid grid-cols-1 gap-y-4 items-center align-middle min-h-screen mx-auto w-full
               md:gap-4 md:px-4 md:grid-cols-2 lg:grid-cols-12 md:m-6"
      >
        <div className="col-span-12">
          <FloatingNavbar />
        </div>
        <div className="pt-24 col-span-12">
          <ProfilePics />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto text-center w-full">
          <HeroCard />
        </div>
        <section id="experience" />
        <div className="col-span-12">
          <Card />
        </div>
        <div className="col-span-12 md:w-2xl md:mx-auto w-full">
          <ExpEdu />
        </div>
        {/* <section id='projects'/>
         <Card />
        <ProjectsSection />
        <section id='skills' />
          <Card />
        <SkillsSection />
        <section id='contact' />          
          <Card />
        <ContactCard />*/}
        <div className="col-span-12 w-full text-center text-sm pt-6 pb-12
                   bg-linear-to-r from-gray-950/0 via-slate-900/80 to-gray-950/0 backdrop-blur-sm"
          >
            <p>Copyright © 2026 Thomas Tran</p>
            <p>All Rights Reserved</p>
        </div>
      </div>
    );
  }
}
