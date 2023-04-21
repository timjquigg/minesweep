import GameBoard from "@/components/gameBoard";
import Menu from "./menu";
import Results from "./results";
import BoardProvider from "@/providers/boardProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BoardProvider>
      <main>
        <Menu />
        <GameBoard />
        <Results />
      </main>
    </BoardProvider>
  );
}
