"use client";
import { useContext } from "react";
import { BoardContext } from "@/providers/boardProvider";
import StyledButton from "@/components/styledButton";

export default function Menu() {
  const { setDifficulty, reset } = useContext(BoardContext);

  const easy = () => {
    setDifficulty("easy");
    reset("easy");
  };

  const medium = () => {
    setDifficulty("medium");
    reset("medium");
  };

  const hard = () => {
    setDifficulty("hard");
    reset("hard");
  };

  return (
    <div className="flex flex-col my-2 justify-center items-center text-center">
      <ol className="space-y-2">
        <li className="">
          <StyledButton id="easyMode" callback={easy}>
            Easy
          </StyledButton>
        </li>
        <li>
          <StyledButton id="mediumMode" callback={medium}>
            Medium
          </StyledButton>
        </li>
        <li>
          <StyledButton id="hardMode" callback={hard}>
            Hard
          </StyledButton>
        </li>
      </ol>
    </div>
  );
}
