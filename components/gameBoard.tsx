"use client";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "@/proivders/boardProvider";
import Cell from "./cell";

// This function will return the game board
export default function GameBoard() {
  const {
    board,
    difficulty,
    gameOver,
    gameWon,
    gameLost,
    gameStarted,
    gamePaused,
    setDifficulty,
    setGameOver,
    setGameWon,
    setGameLost,
    setGameStarted,
    setGamePaused,
  } = useContext(BoardContext);

  const [boardArray, setBoardArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setBoardArray(
      board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex flex-row">
            {row.map((cell, cellIndex) => {
              return <Cell key={`${rowIndex}${cellIndex}`} cell={cell} />;
            })}
          </div>
        );
      })
    );
  }, [board]);

  return <div>{boardArray}</div>;
}