import revealBlanks from "./revealBlanks";

// This function will accept a board instance, a cell instance, and an update function. It will check all cells adjacent to the cell instance and call the update function on each of them, setting isRevealed to true. If any of the now revealed cells are a mine, it will return false. If all of the cells are revealed, it will return true.

export default function revealSurrounding(
  board: Board,
  cell: Cell,
  updateCell: (cell: Cell) => void
): boolean {
  const { row, col } = cell;
  const height = board.length;
  const width = board[0].length;

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i < 0 || i >= height || j < 0 || j >= width) {
        continue;
      }

      // If the cell is already open, continue
      if (board[i][j].isRevealed) {
        continue;
      }

      // If the cell is a flag, continue
      if (board[i][j].isFlagged) {
        continue;
      }

      // If the cell is empty, reveal the cells around it
      if (board[i][j].surroundingMines === 0) {
        revealBlanks(board, board[i][j], updateCell);
      }

      // If any of the cells are a mine, return false
      if (board[i][j].isMine && !board[i][j].isFlagged) {
        return false;
      }
      updateCell({ ...board[i][j], isRevealed: true });
    }
  }

  return true;
}
