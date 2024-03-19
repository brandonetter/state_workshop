"use client";

export default function Colors() {
  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold">Color:</h2>
      <div className="flex justify-start gap-2 w-full">
        <input type="checkbox" id="red" />
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
