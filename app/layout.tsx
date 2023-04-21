import BoardProvider from "@/providers/boardProvider";
import "./globals.css";
import Title from "./title";

export const metadata = {
  title: "Mine Sweep",
  description: "A minesweeper clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BoardProvider>
        <body className="max-w-5xl mx-auto bg-neutral-200">
          <Title />
          {children}
        </body>
      </BoardProvider>
    </html>
  );
}
