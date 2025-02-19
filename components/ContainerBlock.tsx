"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ContainerBlockProps {
  children: React.ReactNode;
}

export function ContainerBlock({ children }: ContainerBlockProps) {
  const pathname = usePathname();

  return (
    <div>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
