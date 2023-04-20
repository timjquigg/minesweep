import { DIFFICULTIES } from "@/constants";

// This function will create a new board with the size and number of mines from the given difficulty. The board will be represented as a 2d array of cells.
export default function makeBoard(
  difficulty: keyof typeof DIFFICULTIES
): Board {
  const { width, height, mines } = DIFFICULTIES[difficulty];
  const board: Cell[][] = [];

  // Create the board
  for (let row = 0; row < height; row++) {
    board.push([]);
    for (let col = 0; col < width; col++) {
      board[row].push({
        row,
        col,
        isMine: false,
        isOpen: false,
        isFlagged: false,
        surroundingMines: 0,
      });
    }
  }

  // Place mines
  let minesPlaced = 0;
  while (minesPlaced < mines) {
    const row = Math.floor(Math.random() * height);
    const col = Math.floor(Math.random() * width);
    const cell = board[row][col];

    if (!cell.isMine) {
      cell.isMine = true;
      minesPlaced++;
    }
  }

  // Calculate the number of surrounding mines for each cell
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const cell = board[row][col];
      if (cell.isMine) {
        continue;
      }

      let surroundingMines = 0;
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i < 0 || i >= height || j < 0 || j >= width) {
            continue;
          }
          if (board[i][j].isMine) {
            surroundingMines++;
          }
        }
      }
      cell.surroundingMines = surroundingMines;
    }
  }

  return board;
}
