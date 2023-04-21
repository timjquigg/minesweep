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
      <div className="sticky top-0 w-full h-24 flex items-center justify-center ">
        <div className="flex-1"></div>
        <h1 className="text-3xl font-serif font-bold">Mine Sweep</h1>
        <div className="flex-1">
          <div className="flex justify-end">
            <button className="m-2" onClick={handleClick}>
              Difficulty
            </button>
          </div>
        </div>
      </div>
      <Menu show={show} setShow={setShow} />
    </>
  );
}
