"use client";

import { useTheme } from "./ThemeProvider";
const bgURL =
  "https://www.macroamerica.com/wp-content/uploads/2015/11/morningandevening-200x200.jpg";
export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      style={{ backgroundImage: `url(${bgURL})` }}
      className={`dark:bg-right-top bg-[left_bottom_-1rem]  h-8 rounded-3xl border-slate-600 border-2 w-20 flex items-center cursor-pointer`}
    >
      <div className="dark:bg-slate-50 bg-yellow-400  h-7 rounded-full w-7 transition-all dark:translate-x-[48px]"></div>
    </div>
  );
}
