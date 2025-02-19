import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { viewport } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Fellyph Cintra",
    default: "Fellyph Cintra - Developer and Content Creator",
  },
  description:
    "Brazilian front-end engineer and Content Creator based in Lagos, Portugal.",
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
