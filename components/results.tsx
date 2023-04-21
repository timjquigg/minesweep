"use client";
import { useContext } from "react";
import { BoardContext } from "@/proivders/boardProvider";
import StyledButton from "./styledButton";

export default function Results() {
  const { gameLost, gameOver, gameWon, reset } = useContext(BoardContext);

  const playAgain = () => {
    reset();
  };

  return (
    <>
      {gameOver && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
          id="my-modal"
        >
          <div className="flex flex-col justify-center items-center">
            {gameWon && <h1>You won!</h1>}
            {gameLost && <h1>You lost!</h1>}
            <StyledButton id="playAgain" callback={playAgain}>
              Play Again
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
