"use client";
import MinesRemaining from "./minesRemaining";
import Timer from "./timer";

export default function Scorecard() {
  return (
    <div className="w-48 ">
      {/* <div className="w-48 border-solid border-2 border-red-500"> */}
      <h2 className="text-center font-bold font-sans text-2xl">Scorecard</h2>
      <Timer />
      <MinesRemaining />
    </div>
  );
}
