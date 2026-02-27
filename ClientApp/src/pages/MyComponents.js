import React, { Component } from 'react';
import { Button } from "@/components/ui/button"
import MyComponent from '../components/Test';
import Game from '../components/TicTacToeTut/TicTacToeTut';
import GameTs from '../components/TicTacToeTut/TicTacToeTs';
import MyProductTable from '../components/ProductTableTutorial/ProductTable';

export class MyComponents extends Component {
  static displayName = MyComponents.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    fetch('/api/weatherforecast/test');
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <Button variant="secondary" onClick={this.incrementCounter}>Increment</Button>
        <br/>
        <br/>
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
