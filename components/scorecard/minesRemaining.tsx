import { DIFFICULTIES } from "@/constants";
import { useContext, useState, useEffect, useCallback } from "react";
import { BoardContext } from "../../providers/boardProvider";
import { countMines } from "@/lib/countMines";

export default function MinesRemaining() {
  const { difficulty, board } = useContext(BoardContext);
  const [minesRemaining, setMinesRemaining] = useState(0);

  const findMinesRemaining = useCallback(() => {
    let mines = 0;
    if (board.length > 0) {
      mines = DIFFICULTIES[difficulty].mines;
    }
    const flags = countMines(board);
    return mines - flags;
  }, [board, difficulty]);

  useEffect(() => {
    setMinesRemaining(findMinesRemaining());
  }, [board, findMinesRemaining]);

  return (
    <div className="flex flex-row justify-between m-1">
      <h3 className="">Mines Remaining</h3>
      <p>{minesRemaining}</p>
    </div>
  );
}
