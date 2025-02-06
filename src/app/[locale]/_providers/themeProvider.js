"use client";

import { ThemeProvider } from "next-themes";

import useIsMounted from "../_hooks/useIsMounted";

export default function ThemeProviders({ children }) {
  const { isMounted } = useIsMounted();

  if (!isMounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-800 dark:text-gray-300">
        {children}
      </div>
    </ThemeProvider>
  );
}