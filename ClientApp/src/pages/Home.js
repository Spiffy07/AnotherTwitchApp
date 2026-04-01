
import React, { Component } from 'react';
import {Avatar, AvatarImage} from '@/components/ui/avatar';

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
        <div className='flex relative justify-center items-center h-60'>
          <Avatar className="w-60 h-60">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/129478296?v=4"
            />
          </Avatar>
        </div>
      </div>
    );
  }
}