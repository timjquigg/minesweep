// This function will go through the board and reveal all the cells that are not yet revealed. It will return true if none of the cells are mines, and false if any of the cells are mines.

export const solvePuzzle = (board: Board): boolean => {
  let isSafe = true;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (!cell.isRevealed) {
        cell.isRevealed = true;
        if (cell.isMine) {
          isSafe = false;
        }
      }
    });
  });
  return isSafe;
};
