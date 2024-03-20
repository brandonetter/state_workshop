"use client";

import React, { useContext, createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({
  children,
  theme,
}: Readonly<{
  children: React.ReactNode;
  theme: string;
}>) {
  const [themeState, setThemeState] = useState(theme || "light");

  const toggleTheme = () => {
    setThemeState(themeState === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, setThemeState }}>
      <div className={themeState}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
