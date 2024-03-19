"use client";

import { useSearchParams } from "next/navigation";

export default function Colors() {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  console.log(color);
  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold">Color:</h2>
      <div className="flex justify-start gap-2 w-full">
        <input type="checkbox" id="red" checked={color?.includes("red")} />
        <label htmlFor="red">Red</label>
      </div>
      <div className="flex justify-start gap-2 w-full">
        <input type="checkbox" id="blue" />
        <label htmlFor="blue">Blue</label>
      </div>
      <div className="flex justify-start gap-2 w-full">
        <input type="checkbox" id="green" />
        <label htmlFor="green">Green</label>
      </div>
    </>
  );
}
