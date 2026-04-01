
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
        <div className='flex relative justify-center items-center h-60 m-10'>
<<<<<<< HEAD
          <Avatar className="absolute w-60 h-60 -translate-x-12 z-1 rounded-full">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/129478296?v=4"
=======
            <Avatar className="absolute transition-all w-60 h-60 -translate-x-12 z-1 hover:w-70 hover:h-70 hover:translate-x-0 hover:z-2">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/129478296?v=4"
                />
            </Avatar>
          <Avatar className='absolute transition-all w-60 h-60 translate-x-12 hover:w-70 hover:h-70 hover:translate-x-0 hover:z-2'>
            <AvatarImage 
              src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/logo2.png"
>>>>>>> 0692b6c (Add side by side profile pics of me and my twitch)
            />
          </Avatar>
          <Avatar className='absolute transition-all w-80 h-80 translate-x-12 rounded-full hover:w-100 hover:h-100 hover:translate-x-0 hover:z-2'>
            <AvatarImage 
              src="https://raw.githubusercontent.com/Spiffy07/AnotherTwitchApp/refs/heads/main/ClientApp/logo2.png"
            />
          </Avatar>
        </div>
      </div>
    );
  }
}