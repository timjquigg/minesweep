"use client";
import { MouseEvent, useState, useContext, useEffect } from "react";
import { BoardContext } from "@/providers/boardProvider";
import revealBlanks from "@/lib/revealBlanks";
import revealSurrounding from "@/lib/revealSurrounding";

type Props = {
  cell: Cell;
};

// This component is a cell in the game board
export default function Cell({ cell }: Props) {
  const {
    board,
    setGameStarted,
    setGameOver,
    setGameWon,
    setGameLost,
    updateCell,
    revealBoard,
  } = useContext(BoardContext);

  let className = `w-6 h-6 flex justify-center items-center  border-solid border-black border hover:scale-110 hover:border-solid `;

  className +=
    cell.isRevealed && !cell.isMine ? "bg-gray-300" : "bg-gray-400 shadow-xl";

  if (cell.isRevealed) {
    switch (cell.surroundingMines) {
      case 1:
        className += " text-blue-500";
        break;
      case 2:
        className += " text-green-500";
        break;
      case 3:
        className += " text-red-500";
        break;
      case 4:
        className += " text-purple-500";
        break;
      case 5:
        className += " text-yellow-500";
        break;
      case 6:
        className += " text-pink-500";
        break;
      case 7:
        className += " text-indigo-500";
        break;
      case 8:
        className += " text-gray-500";
        break;
      default:
        className += " text-gray-500";
        break;
    }
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.button === 0) {
      updateCell({ ...cell, isRevealed: true });
      if (cell.isMine) {
        // Show all mines
        revealBoard();
        setGameStarted(false);
        setGameOver(true);
        setGameWon(false);
        setGameLost(true);
        return;
      }
      if (cell?.surroundingMines === 0) {
        revealBlanks(board, cell, updateCell);
        return;
      }
      return;
    }

    if (e.button === 2) {
      // If the cell is already revealed, reveal surrounding cells
      if (cell.isRevealed) {
        const result = revealSurrounding(board, cell, updateCell);
        if (!result) {
          // Show all mines
          revealBoard();
          setGameStarted(false);
          setGameOver(true);
          setGameWon(false);
          setGameLost(true);
          return;
        }
        return;
      }
      updateCell({ ...cell, isFlagged: !cell.isFlagged });
      return;
    }
  };

  return (
    <button
      className={className}
      onClick={(e) => handleClick(e)}
      onContextMenu={(e) => handleClick(e)}
    >
      {cell.isRevealed ? (
        cell?.isMine ? (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 125.82 127.68"
            className="p-1"
          >
            <title>Mine Blast</title>
            <path d="M38.83,29.08a7.93,7.93,0,0,1,3.6-2L40.55,16.25a2.4,2.4,0,0,1,4.31-1.82L51.76,23a25.18,25.18,0,0,1,2.79-1.14,20.13,20.13,0,0,1,2.87-.73L60.65,2a2.39,2.39,0,0,1,4.66-.3l5.18,14.76c1.2-.34,1.61-.38,4.23.15a3.68,3.68,0,0,1,.47.15,21.6,21.6,0,0,1,4.71,2.66,15,15,0,0,1,1.64,1.47l5.86-9.13a2.4,2.4,0,0,1,4.42,1.43L91.87,23l14-10.41a2.4,2.4,0,0,1,3.55,3l-8.07,17.25c4.6,3.38,6.65,6.34,9.51,10.47.75,1.07,1.55,2.23,2.48,3.51l9.38,2a2.4,2.4,0,0,1,.48,4.53l-6.36,3.3a18.47,18.47,0,0,1,1.09,6.74,25.3,25.3,0,0,1-1.6,7.74l2.31,6.36a2.42,2.42,0,0,1,0,1.74L117,83.15l8.21,9a2.39,2.39,0,0,1-.16,3.39,2.34,2.34,0,0,1-1.88.61l-7.79-.9,3.24,5.4a2.39,2.39,0,0,1-.81,3.29,2.43,2.43,0,0,1-1.69.31l-9-1.26c-2.68,4.43-3.76,4.88-7.42,6.44l-1.21.51,1.08,6.83a2.4,2.4,0,0,1-2,2.74,2.34,2.34,0,0,1-1.24-.13l-6.09-2-.44,7.77a2.41,2.41,0,0,1-4.34,1.29l-7.19-8.55-3.44,1,.31,6.3A2.39,2.39,0,0,1,71,126.91l-5.78-6.22a48.33,48.33,0,0,1-11-2.87,53.57,53.57,0,0,1-9.49-4.89L30,119.68a2.4,2.4,0,0,1-3.19-3.15h0l5.48-12.44a45.83,45.83,0,0,1-9.19-9,51.29,51.29,0,0,1-6.91-12.48L.75,68.06a2.4,2.4,0,0,1,1.82-4.13l15.22.56a38,38,0,0,1,.64-6.93A61.07,61.07,0,0,1,20.76,49l-1-6.88a2.41,2.41,0,0,1,2.05-2.71,2.19,2.19,0,0,1,.51,0l1.77,0L12.93,19.84a2.39,2.39,0,0,1,3.24-3.28L38.83,29.08ZM51.44,50.46a13.32,13.32,0,0,1,4.83-3.07l.28-3.62L59.42,46a9.94,9.94,0,0,1,4.38-1.44l.7-4.19,2,1.73a13,13,0,0,1,5,.2A9.89,9.89,0,0,1,75.84,46l2.58-2.1,1.12,3,3.19-.81L82.81,49c3.7,2.48,5.79,5.37,8.5,9l2,1.13-2,1.61c1.34,3,2.06,5.93,1,8.9l1.37,3.76L92.14,77,93.8,80l-3.1.84.7,2.36-2.62-.32a17.19,17.19,0,0,1-7.53,7.32l-.85,2.49L78,92.34l-2.1,2.55-1.81-2.14-3.54,1-.69,2.49-2.44-1.78a25.09,25.09,0,0,1-11.26-4.32l-4.6.07-.46-3.69a25.46,25.46,0,0,1-9.19-12.17l-1.55-4.78,2.94-1.33a25.82,25.82,0,0,1,1.5-10.06l-.19-3.48,2.86-.35,0-3.49,4-.41ZM44.19,31.53c-1.35.45-1.57.52-3.22,2.13a2.38,2.38,0,0,1-2.91.47L21.34,24.9l9.05,15.86a2.4,2.4,0,0,1-2.14,3.58l-3.31-.07.64,4.57A2.39,2.39,0,0,1,25.49,50a60,60,0,0,0-2.35,8.41,33.6,33.6,0,0,0-.47,8.4h0v.24a2.41,2.41,0,0,1-2.48,2.31L8.67,69,19.83,79.52a2.41,2.41,0,0,1,.58.88,47.45,47.45,0,0,0,6.45,11.81,42.16,42.16,0,0,0,9.6,9,2.4,2.4,0,0,1,1,3l-3.72,8.44,10-4.59a2.42,2.42,0,0,1,2.51.11,49.76,49.76,0,0,0,9.68,5.15A43,43,0,0,0,66.62,116a2.43,2.43,0,0,1,1.48.75l1.9,2-.07-1.48a2.39,2.39,0,0,1,1.73-2.58l6.75-1.93h0a2.39,2.39,0,0,1,2.49.76l4.42,5.25.27-4.87h0a2.6,2.6,0,0,1,.11-.62,2.39,2.39,0,0,1,3-1.52l5.44,1.81-.75-4.74a2.39,2.39,0,0,1,1.35-2.55c1.21-.56,2.19-1,3-1.33,2.78-1.18,3.42-1.45,5.93-5.78A2.41,2.41,0,0,1,106.16,98l5.73.8-3.17-5.26a2.45,2.45,0,0,1-.33-1.51A2.41,2.41,0,0,1,111.05,90l6.28.73-4.9-5.39a2.43,2.43,0,0,1-.47-2.57l1.85-4.43-2.25-6.19a2.35,2.35,0,0,1,0-1.75,22.12,22.12,0,0,0,1.62-7,15.11,15.11,0,0,0-1.53-6.76,2.41,2.41,0,0,1,1.09-3.12l2.49-1.28-3.75-.81h0a2.41,2.41,0,0,1-1.42-.91c-1.2-1.62-2.19-3.06-3.11-4.38C104,41.88,102.06,39,97,35.65a2.4,2.4,0,0,1-.84-3l4.94-10.55L90.93,29.64a2.31,2.31,0,0,1-1.42.47,2.38,2.38,0,0,1-2.4-2.38l0-6.55-3.28,5.11a2.25,2.25,0,0,1-.71.73,2.41,2.41,0,0,1-3.33-.67A12.45,12.45,0,0,0,77,23.22a16.75,16.75,0,0,0-3.47-1.95C72.11,21,72,21,71.57,21.14a17.31,17.31,0,0,1-2.13.51,2.4,2.4,0,0,1-2.76-1.55L63.83,12l-2,11.69a2.4,2.4,0,0,1-2.24,2,13.64,13.64,0,0,0-3.55.71,20.26,20.26,0,0,0-3.73,1.72,2.4,2.4,0,0,1-3.07-.58l-2.4-3,.64,3.7h0A2.39,2.39,0,0,1,46,30.91c-.7.26-1.28.46-1.77.62Z" />
          </svg>
        ) : (
          <p>{`${cell?.surroundingMines > 0 ? cell.surroundingMines : " "}`}</p>
        )
      ) : cell.isFlagged ? (
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 447.514 447.514"
          className="p-1"
        >
          <path
            d="M389.183,10.118c-3.536-2.215-7.963-2.455-11.718-0.634l-50.653,24.559c-35.906,17.409-77.917,16.884-113.377-1.418
       c-38.094-19.662-83.542-18.72-120.789,2.487V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v407.514c0,11.046,8.954,20,20,20
       s20-8.954,20-20V220.861c37.246-21.207,82.694-22.148,120.789-2.487c35.46,18.302,77.47,18.827,113.377,1.418l56.059-27.18
       c7.336-3.557,11.995-10.993,11.995-19.146V20.385C394.866,16.212,392.719,12.333,389.183,10.118z"
          />
        </svg>
      ) : (
        <p> </p>
      )}
    </button>
  );
}
