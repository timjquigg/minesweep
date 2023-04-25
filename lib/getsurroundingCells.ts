// Desc: get surrounding cells of a cell
export default function getSurroundingCells(
  board: Board,
  row: number,
  col: number
): Cell[] {
  const cells: Cell[] = [];
  const rows = board.length;
  const cols = board[0].length;
  for (let i = row - 1; i <= row + 1; i++) {
    if (i < 0 || i >= rows) continue;
    for (let j = col - 1; j <= col + 1; j++) {
      if (j < 0 || j >= cols) continue;
      if (i === row && j === col) continue;
      cells.push(board[i][j]);
    }
  }
  return cells;
}
