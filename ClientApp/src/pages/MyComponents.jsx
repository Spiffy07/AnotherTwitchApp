import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion";

import { Button } from "@/components/ui/button";
import MyComponent from "../components/Test";
import Game from "../components/TicTacToeTut/TicTacToeTut";
import GameTs from "../components/TicTacToeTut/TicTacToeTs";
import MyProductTable from "../components/ProductTableTutorial/ProductTable";
import MyNavMenu from "@/components/MyNavMenu/MyNavMenu";

export function MyComponents() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <MyNavMenu />
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">
          Current count: <strong>{count}</strong>
        </p>

        <Button variant="secondary" onClick={incrementCounter}>
          Increment
        </Button>
        <br />
        <br />
        <MyComponent />
        <br />
        <Game />
        <br />
        <GameTs />
        <br />
        <MyProductTable />
      </div>
    </>
  );
}
