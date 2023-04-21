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
      <body className="max-w-xl mx-auto">
        <Title />
        {children}
      </body>
    </html>
  );
}
