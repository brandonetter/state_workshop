"use client";

import ThemeToggle from "./ThemeToggle";

export default function Example3() {
  return (
    <main className="flex justify-center items-center h-screen p-20 bg-slate-300 dark:bg-black">
      <div className="flex flex-col gap-2 dark:bg-slate-800 border rounded-lg p-5 h-96 bg-slate-200 shadow-xl dark:shadow-white/20">
        <h1 className="dark:text-blue-100">Toggle Friend!</h1>

        <ThemeToggle />
        {/* skeletons */}
        <div className="flex flex-col gap-5 mt-10">
          <div className="dark:bg-slate-50 bg-slate-500 h-8 w-full rounded-full animate-pulse"></div>
          <div className="dark:bg-slate-50 bg-slate-500 h-8 w-1/2 rounded-full animate-pulse"></div>
          <div className="dark:bg-slate-50 bg-slate-500 h-8 w-full rounded-full animate-pulse"></div>
        </div>
      </div>
    </main>
  );
}
