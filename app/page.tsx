import GameBoard from "@/components/gameBoard";
import Results from "@/components/results";
import BoardProvider from "@/proivders/boardProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BoardProvider>
      <main>
        <GameBoard />
        <Results />
      </main>
    </BoardProvider>
  );
}
