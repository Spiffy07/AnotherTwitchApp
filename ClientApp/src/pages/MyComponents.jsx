import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/ui/button";
import MyComponent from "../components/Test";
import Game from "../components/TicTacToeTut/TicTacToeTut";
import GameTs from "../components/TicTacToeTut/TicTacToeTs";
import MyProductTable from "../components/ProductTableTutorial/ProductTable";
import MyNavMenu from "@/components/MyNavMenu/MyNavMenu";
import Footer from "@/components/Footer";

export function MyComponents() {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  function incrementCounter() {
    setCount(count + 1);
  }

  // 1. Track scroll progress relative to this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress (0 to 1) to different "speeds" (pixel offsets)
  // Background moves slowly, Foreground moves faster
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
      <div ref={containerRef} className="relative h-auto w-full overflow-hidden">
        {/* Slow Background Layer */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 h-full w-full -z-2 bg-[url('..\\ClientApp\\Media\\background.png')] bg-cover"
        />

        {/* Faster Midground Layer */}
        <motion.div
          style={{ y: yMid }}
          className="absolute inset-0 -z-1 w-full bg-[url('..\\ClientApp\\Media\\planetTest.png')]  bg-no-repeat bg-center"
        />

        {/* Normal Scrolling Content */}

        <MyNavMenu />
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
        <Footer />
      </div>
  );
}
