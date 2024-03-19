"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Category() {
  const [category, setCategory] = useURLQuery("category", "all");
  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold ">Category:</h2>
      {/* radio buttons */}
      <div className="flex justify-start gap-2 w-full flex-wrap">
        <input
          type="radio"
          id="all"
          name="category"
          checked={category === "all"}
          onChange={() => setCategory("all")}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="electronics"
          name="category"
          checked={category === "electronics"}
          onChange={() => setCategory("electronics")}
        />
        <label htmlFor="electronics">Electronics</label>

        <input
          type="radio"
          id="clothing"
          name="category"
          checked={category === "clothing"}
          onChange={() => setCategory("clothing")}
        />
        <label htmlFor="clothing">Clothing</label>
      </div>
    </>
  );
}
