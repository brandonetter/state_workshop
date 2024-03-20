"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";
export default function Price() {
  const [price, setPrice] = useURLQuery("price", "", 500);

  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold">Price:</h2>
      <div className="flex justify-start gap-2 w-full">
        <input
          type="range"
          id="price"
          min="0"
          max="40"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="w-full"
        />
      </div>
    </>
  );
}
