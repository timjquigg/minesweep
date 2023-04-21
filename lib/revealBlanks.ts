// This function will accept a board instance and an empty cell and will reveal all the empty cells around it. It will also return the number of cells revealed.

// export default function revealBlanks(
//   board: Board,
//   cell: Cell,
//   updateCell: (cell: Cell) => void
// ): number {
//   let revealed = 0;
//   const { row, col } = cell;
//   const height = board.length;
//   const width = board[0].length;

//   // If the cell is not empty, return
//   if (cell.surroundingMines !== 0) {
//     return revealed;
//   }

//   // If the cell is already open, return
//   if (cell.isRevealed) {
//     return revealed;
//   }

//   // Open the cell
//   cell.isRevealed = true;
//   updateCell(cell);
//   revealed++;

//   // Recursively reveal the cells around it
//   for (let i = row - 1; i <= row + 1; i++) {
//     for (let j = col - 1; j <= col + 1; j++) {
//       if (i < 0 || i >= height || j < 0 || j >= width) {
//         continue;
//       }
//       revealed += revealBlanks(board, board[i][j], updateCell);
//     }
//   }

//   return revealed;
// }

// This function will accept a board instance, an empty cell, and an update cell function. It will reveal all the empty cells around it and the cells adjacent to those cells.

export default function revealBlanks(
  board: Board,
  cell: Cell,
  updateCell: (cell: Cell) => void
): number {
  let revealed = 0;
  const { row, col } = cell;
  const height = board.length;
  const width = board[0].length;

  // If the cell is not empty, return
  if (cell.surroundingMines !== 0) {
    updateCell({ ...cell, isRevealed: true });
    revealed++;
    return revealed;
  }

  // If the cell is already open, return
  if (cell.isRevealed) {
    return revealed;
  }

  // Open the cell
  updateCell({ ...cell, isRevealed: true });
  revealed++;

  // Recursively reveal the cells around it
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i < 0 || i >= height || j < 0 || j >= width) {
        continue;
      }
      revealed += revealBlanks(board, board[i][j], updateCell);
    }
  }

  return revealed;
}
