type Board = Cell[][];

interface Cell {
  row: number;
  col: number;
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  surroundingMines: number;
}
