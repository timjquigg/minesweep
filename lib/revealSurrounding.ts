import revealBlanks from "./revealBlanks";
import checkSurrounding from "./checkSurrounding";
import getSurroundingCells from "./getsurroundingCells";

// This function will accept a board instance, a cell instance, and an update function. It will check all cells adjacent to the cell instance and call the update function on each of them, setting isRevealed to true. If any of the now revealed cells are a mine, it will return false. If all of the cells are revealed, it will return true.

export default function revealSurrounding(
  board: Board,
  cell: Cell,
  updateCell: (cell: Cell) => void
): boolean {
  const { row, col } = cell;
  const height = board.length;
  const width = board[0].length;
  let minesClear = true;

  const surroundingCells = getSurroundingCells(board, row, col);

  if (checkSurrounding(board, cell)) {
    surroundingCells.forEach((cell) => {
      if (cell.isRevealed) {
        return;
      }

      if (cell.isFlagged) {
        return;
      }

      if (cell.surroundingMines === 0) {
        revealBlanks(board, cell, updateCell);
      }

      if (cell.isMine && !cell.isFlagged) {
        minesClear = false;
        return;
      }
      updateCell({ ...cell, isRevealed: true });
    });
  }

  return minesClear;
}
