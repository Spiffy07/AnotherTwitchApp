import { JSX, MouseEventHandler, useState } from "react";
import "./TTTstyle.module.css";
import Error from "../Error/Error";

interface SquareProps {
  value: string | undefined;
  onSquareClick: MouseEventHandler;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

interface BoardProps {
  onPlay: Function;
  xIsNext: boolean;
  squares: Array<string>;
}

function Board({ onPlay, xIsNext, squares }: BoardProps) {
  function handleClick(index: number) {
    if (squares[index] !== null) return;

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[index] = "X") : (nextSquares[index] = "O");
    onPlay(nextSquares, index);
  }

  let board: Array<JSX.Element> = [];
  for (let i: number = 0; i < 9; i += 3) {
    let row: Array<JSX.Element> = [];
    for (let j: number = 0; j < 3; j++) {
      row.push(
        <Square
          key={i + j}
          value={squares[i + j]}
          onSquareClick={() => handleClick(i + j)}
        />
      );
    }
    board.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }

  return <div className="board">{board}</div>;
}

export default function Game() {
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [squareIndex, setSquareIndex] = useState<number[]>([]);

  const currentSquares: string[] | undefined = history[currentMove];
  if (currentSquares === undefined) {
    // Type guard
    return <Error outputMessage="Error from TicTacToeTs" />;
  }
  let xIsNext: boolean = currentMove % 2 === 0;

  function handlePlay(nextSquares: string[], nextSquareIndex: number) {
    setSquareIndex([...squareIndex.slice(0, currentMove + 1), nextSquareIndex]);

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <Board onPlay={handlePlay} xIsNext={xIsNext} squares={currentSquares} />
  );
}
