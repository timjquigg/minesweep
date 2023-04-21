"use client";
import { useContext } from "react";
import { BoardContext } from "@/providers/boardProvider";
import StyledButton from "../components/styledButton";

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
          <div className="w-60 h-32 flex flex-col space-y-4 justify-center items-center  bg-neutral-200 bg-opacity-100">
            {gameWon && <h1>You win!</h1>}
            {gameLost && <h1>You lose!</h1>}
            <StyledButton id="playAgain" callback={playAgain} classes="w-32">
              Play Again
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
}
