import { useContext, useEffect } from "react";
import { BoardContext } from "@/providers/boardProvider";

export default function Timer() {
  const { gameStarted, gameOver, time, setTime } = useContext(BoardContext);

  useEffect(() => {
    const updateTime = () => {
      setTime((prevTime: number) => prevTime + 1);
    };

    if (gameStarted && !gameOver) {
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, gameOver, setTime]);

  return (
    <div className="flex flex-row justify-between m-1">
      <h3 className="">Timer</h3>
      <p>{time}</p>
    </div>
  );
}
