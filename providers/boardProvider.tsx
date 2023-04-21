"use client";
import { DIFFICULTIES } from "@/constants";
import { checkBoard } from "@/lib/checkBoard";
import makeBoard from "@/lib/makeBoard";
import { useState, useEffect, createContext, useCallback } from "react";
// This function will return the game board context

type Props = {
  children?: React.ReactNode;
};

interface BoardContext {
  board: Board;
  difficulty: keyof typeof DIFFICULTIES;
  gameOver: boolean;
  gameWon: boolean;
  gameLost: boolean;
  gameStarted: boolean;
  gamePaused: boolean;
  setDifficulty: (difficulty: keyof typeof DIFFICULTIES) => void;
  setGameOver: (gameOver: boolean) => void;
  setGameWon: (gameWon: boolean) => void;
  setGameLost: (gameLost: boolean) => void;
  setGameStarted: (gameStarted: boolean) => void;
  setGamePaused: (gamePaused: boolean) => void;
  updateCell: (cell: Cell) => void;
  reset: (dif?: keyof typeof DIFFICULTIES) => void;
  revealBoard: () => void;
}

export const BoardContext = createContext<BoardContext>({
  board: [],
  difficulty: "easy",
  gameOver: false,
  gameWon: false,
  gameLost: false,
  gameStarted: false,
  gamePaused: false,
  setDifficulty: () => {},
  setGameOver: () => {},
  setGameWon: () => {},
  setGameLost: () => {},
  setGameStarted: () => {},
  setGamePaused: () => {},
  updateCell: () => {},
  reset: (dif?: keyof typeof DIFFICULTIES) => {},
  revealBoard: () => {},
});

export default function BoardProvider({ children }: Props) {
  const [difficulty, setDifficulty] =
    useState<keyof typeof DIFFICULTIES>("easy");
  const [board, setBoard] = useState<Board>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameLost, setGameLost] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gamePaused, setGamePaused] = useState<boolean>(false);

  const reset = (dif: keyof typeof DIFFICULTIES = difficulty) => {
    setGameOver(false);
    setGameWon(false);
    setGameLost(false);
    setGameStarted(false);
    setGamePaused(false);
    getNewBoard(dif);
  };

  // This will update the board to show all mines
  const revealBoard = () => {
    const newBoard = [...board];
    newBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isMine) {
          cell.isRevealed = true;
        }
      });
    });
    setBoard(newBoard);
  };

  const getNewBoard = useCallback((difficulty: keyof typeof DIFFICULTIES) => {
    const newBoard = makeBoard(difficulty);
    setBoard(newBoard);
  }, []);

  // This will update a cell to show it has been clicked
  const updateCell = (cell: Cell) => {
    const newBoard = [...board];
    newBoard[cell.row][cell.col] = cell;
    setBoard(newBoard);
  };

  useEffect(() => {
    const gameState = checkBoard(board);
    if (gameState === true) {
      setGameWon(true);
      setGameOver(true);
    }
  }, [board, gameLost, gameOver, gameWon]);

  const value = {
    board,
    difficulty,
    gameOver,
    gameWon,
    gameLost,
    gameStarted,
    gamePaused,
    setDifficulty,
    setGameOver,
    setGameWon,
    setGameLost,
    setGameStarted,
    setGamePaused,
    updateCell,
    reset,
    revealBoard,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
