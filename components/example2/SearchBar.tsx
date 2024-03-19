"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useURLQuery("search", "", 500);

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="w-full p-3 border-b border-black/10 focus:outline-none"
    />
  );
}
