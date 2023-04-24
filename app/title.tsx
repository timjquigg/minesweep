"use client";
import { useState } from "react";
import Menu from "./menu";

export default function Title() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="sticky top-0 w-full h-24 flex justify-center border-solid border-black border-b-4">
        <div className="flex-1"></div>
        <h1 className="flex flex-col justify-center text-3xl font-serif font-bold">
          Mine Sweeper
        </h1>
        <div className="flex flex-row justify-end items-end flex-1">
          <div className="">
            <button className="m-2" onClick={handleClick}>
              Set Difficulty
            </button>
          </div>
        </div>
      </div>
      <Menu show={show} setShow={setShow} />
    </>
  );
}
