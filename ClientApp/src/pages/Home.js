
import React, { Component } from 'react';
import { Card } from '@/components/ui/card';
import ProfilePics from '@/components/ProfilePics/ProfilePics';
import HeroCard from '@/components/HeroCard';
import ExpEdu from '@/components/ExpEdu';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactCard from '@/components/ContactCard';
import {FloatingNavbar} from '@/components/ui/floating-navbar';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="flex flex-col items-center h-screen"> 
        <FloatingNavbar />
        <div className='m-6 pt-24'>
          <ProfilePics />
        </div>
        <HeroCard />
        <section id='experience' />
          <Card />
        <ExpEdu />
        <section id='projects'/>
         <Card />
        <ProjectsSection />
        <section id='skills' />
          <Card />
        <SkillsSection />
        <section id='contact' />          
          <Card />
        <ContactCard />
        <footer className='w-lvw items-center'>
          <div className='pt-6  pb-12 px-4 text-center bg-linear-to-r from-gray-950/0 via-slate-900/60 to-gray-950/0 backdrop-blur-sm'>
            <p>Copyright © 2026 Thomas Tran. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}