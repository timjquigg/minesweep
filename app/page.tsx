"use client";
import { useContext } from "react";
import { BoardContext } from "@/providers/boardProvider";
import GameBoard from "@/components/gameBoard";
import Results from "./results";
import { Inter } from "next/font/google";
import Scorecard from "@/components/scorecard";
import StyledButton from "@/components/styledButton";
import { solvePuzzle } from "@/lib/solvePuzzle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { board, gameStarted, gameOver, setGameOver, setGameLost, setGameWon } =
    useContext(BoardContext);

  const handleClick = () => {
    const result = solvePuzzle(board);
    setGameOver(true);
    if (result) {
      setGameWon(true);
    } else {
      setGameLost(true);
    }
  };

  return (
    <main>
      <div className="flex flex-row">
        <div className="flex-1"></div>
        <GameBoard />
        <div className="flex flex-col items-end flex-1">
          <div className="m-2 space-y-4">
            <Scorecard />
            <StyledButton
              id="Solve"
              classes="w-36 flex justify-center mx-auto "
              callback={handleClick}
              disabled={gameOver || !gameStarted}
            >
              Solve Puzzle
            </StyledButton>
          </div>
        </div>
      </div>
      <Results />
    </main>
  );
}
