import { useState } from "react";
import "./TTTstyle.css"
import { Button } from "@/components/ui/button"

function FlipList({ onFlipListClick }) {
  return (
    <Button variant="secondary" onClick={onFlipListClick}>
      Flip Move List
    </Button>
  );
}

function Square({ value, onSquareClick, isWinner }) {
  return isWinner ? (
    <Button className="square winner" onClick={onSquareClick}>
      {value}
    </Button>
  ) : (
    <Button className="square" onClick={onSquareClick}>
      {value}
    </Button>
  );
}

function Board({ xIsNext, squares, onPlay, winningSquares }) {
  function handleClick(i) {
    if (squares[i]) return;

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares, i);
  }

  let board = [];
  for (let i = 0; i < 9; i += 3) {
    let row = [];

    for (let j = 0; j < 3; j++) {
      row.push(
        <Square
          key={i + j}
          value={squares[i + j]}
          onSquareClick={() => handleClick(i + j)}
          isWinner={
            winningSquares && winningSquares.includes(i + j) ? true : false
          }
        />
      );
    }

    board.push(<div key={row[0].key} className="board-row">{row}</div>);
  }

  return <>{board}</>;

  // return (
  //   <>
  //     <div className="board-row">
  //       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  //       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  //       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  //       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  //       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  //     </div>
  //     <div className="board-row">
  //       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  //       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  //       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  //     </div>
  //   </>
  // );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isMoveListAscending, setIsMoveListAscending] = useState(true);
  const [squareIndex, setSquareIndex] = useState([]);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  let status;
  let winner = calculateWinner(currentSquares);

  if (winner) {
    status = "👑 Winner: " + winner[3];
  } else if (winner === null && currentMove >= 9) {
    status = "🔫 DRAW! 🔫";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handlePlay(nextSquares, nextSquareIndex) {
    if (winner) return;

    setSquareIndex([...squareIndex.slice(0, currentMove + 1), nextSquareIndex]);

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpToMove(move) {
    setCurrentMove(move);
  }

  function handleFlipList() {
    setIsMoveListAscending(!isMoveListAscending);
  }

  const moves = history.map((squares, move) => {
    if (move !== history.length - 1 || move === 0) {
      return (
        <li key={move}>
          <Button className="bg-[#258cfb]" onClick={() => jumpToMove(move)}>
            {move === 0
              ? "Start Game"
              : "Jump to Move " + move + indexToRowColumn(squareIndex[move])}
          </Button>
          <p></p>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <p>
            <strong>You are on move #{move}</strong>
          </p>
        </li>
      );
    }
  });

  return (
    <>
      <div>{status}</div>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            winningSquares={winner ? winner : false}
          />
        </div>
        <div className="game-info">
          <FlipList onFlipListClick={handleFlipList} />
          {isMoveListAscending ? (
            <ol className="status"> {moves} </ol>
          ) : (
            <ol className="status" reversed>
              {" "}
              {moves.reverse()}{" "}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c, squares[a]];
    }
  }
  return null;
}

function indexToRowColumn(index) {
  switch (index) {
    case 0:
      return " (1, 1)";
    case 1:
      return " (1, 2)";
    case 2:
      return " (1, 3)";
    case 3:
      return " (2, 1)";
    case 4:
      return " (2, 2)";
    case 5:
      return " (2, 3)";
    case 6:
      return " (3, 1)";
    case 7:
      return " (3, 2)";
    case 8:
      return " (3, 3)";
    default:
      throw new RangeError();
  }
}
