// This function will count how many mines have been flagged and return the number

export const countMines = (board: Board): number => {
  let count = 0;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isFlagged && cell.isMine) {
        count++;
      }
    });
  });
  return count;
};
