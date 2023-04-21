// This function will check the game board and return true if all mines are flagged and all non-mines are revealed
export function checkBoard(board: Board): boolean {
  if (board.length === 0) return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].isMine && !board[i][j].isFlagged) {
        return false;
      }
      if (!board[i][j].isMine && !board[i][j].isRevealed) {
        return false;
      }
    }
  }
  return true;
}
