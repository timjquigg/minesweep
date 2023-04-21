// "use client";
import { useContext, useState } from "react";
import { BoardContext } from "@/providers/boardProvider";
import StyledButton from "@/components/styledButton";

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export default function Menu({ show, setShow }: Props) {
  const { setDifficulty, reset } = useContext(BoardContext);
  // const [visible, setVisible] = useState(show);

  const easy = () => {
    setDifficulty("easy");
    setShow(false);
    reset("easy");
    console.log("easy");
  };

  const medium = () => {
    setDifficulty("medium");
    setShow(false);
    reset("medium");
  };

  const hard = () => {
    setDifficulty("hard");
    setShow(false);
    reset("hard");
  };

  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
          id="my-modal"
        >
          <div className="w-60 h-32 flex flex-col space-y-4 justify-center items-center  bg-neutral-200 bg-opacity-100 text-center">
            <ol className="space-y-2">
              <li className="">
                <StyledButton id="easyMode" classes="w-24" callback={easy}>
                  Easy
                </StyledButton>
              </li>
              <li>
                <StyledButton id="mediumMode" classes="w-24" callback={medium}>
                  Medium
                </StyledButton>
              </li>
              <li>
                <StyledButton id="hardMode" callback={hard} classes="w-24">
                  Hard
                </StyledButton>
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
