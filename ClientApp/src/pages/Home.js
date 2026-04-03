
import React, { Component } from 'react';
import { Card } from '@/components/ui/card';
import ProfilePics from '@/components/ProfilePics/ProfilePics';
import HeroCard from '@/components/HeroCard';
import ExpEdu from '@/components/ExpEdu';
import ProjectsSection from '@/components/ProjectsSection';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="flex flex-col items-center h-screen"> 
        <p className='text-center'>Welcome to your new single-page application, built with:</p>
        <ul className='flex flex-col items-center'>
          <li><a className="text-center text-blue-700 dark:text-blue-300" href='https://get.asp.net/'>ASP.NET Core</a> and <a className="text-blue-700 dark:text-blue-300" href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a className="text-center text-blue-700 dark:text-blue-300" href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a className="text-center text-blue-700 dark:text-blue-300" href='https://tailwindcss.com/docs/installation/tailwind-cli'>Tailwind CSS</a> for layout and styling</li>
          <li><a className="text-center text-blue-700 dark:text-blue-300" href='/mycomponents'>My other stuff</a> for demonstration</li>
        </ul>
        <br />
        <ProfilePics />
        <HeroCard />
        <Card />
        <ExpEdu />
        <Card />
        <ProjectsSection />
      </div>
    );
  }
}