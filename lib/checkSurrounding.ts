import getSurroundingCells from "./getsurroundingCells";

// This function will accept a board instance and a cell instance. It will check each cell surounding the provided cell instance. If there are less flagged mines than the number of mines surrounding the cell, it will return false. Otherwise, it will return true.

export default function checkSurrounding(board: Board, cell: Cell): boolean {
  const { row, col } = cell;
  const surroundingCells = getSurroundingCells(board, row, col);
  const surroundingFlags = surroundingCells.filter((cell) => cell.isFlagged);
  return surroundingFlags.length === cell.surroundingMines;
}
