import React, { Component } from 'react';
import MyComponent from '../components/Test';
import Game from '../components/TicTacToeTut/TicTacToeTut';
import GameTs from '../components/TicTacToeTut/TicTacToeTs';
import MyProductTable from '../components/ProductTableTutorial/ProductTable';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div> 
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a className="text-blue-700 dark:text-blue-500" href='https://get.asp.net/'>ASP.NET Core</a> and <a className="text-blue-700 dark:text-blue-500" href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a className="text-blue-700 dark:text-blue-500" href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a className="text-blue-700 dark:text-blue-500" href='https://tailwindcss.com/docs/installation/tailwind-cli'>Tailwind CSS</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code className='text-red-500'>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code className='text-red-500'>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code className='text-red-500'>ClientApp</code> subdirectory is a standard React application based on the <code className='text-red-500'>create-react-app</code> template. If you open a command prompt in that directory, you can run <code className='text-red-500'>npm</code> commands such as <code className='text-red-500'>npm test</code> or <code className='text-red-500'>npm install</code>.</p>
        <MyComponent />
        <br/>
        <Game />
        <br/>
        <GameTs />
        <br/>
        <MyProductTable/>
      </div>
    );
  }
}