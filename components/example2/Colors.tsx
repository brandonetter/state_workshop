"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";

export default function Colors() {
  const [color, setColor] = useURLQuery("color", "");

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorArray = color.split(",");
    const isChecked = e.target.checked;
    const targetColor = e.target.id;

    if (isChecked) {
      colorArray.push(targetColor);
    } else {
      const index = colorArray.indexOf(targetColor);
      if (index !== -1) {
        colorArray.splice(index, 1);
      }
    }

    const colorSet = Array.from(new Set(colorArray));
    setColor(colorSet.join(","));
  };

  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold">Color:</h2>
      <div className="flex justify-start gap-2 w-full">
        <input
          type="checkbox"
          id="red"
          checked={color?.includes("red")}
          onChange={setChange}
        />
        <label htmlFor="red">Red</label>
      </div>
      <div className="flex justify-start gap-2 w-full">
        <input
          type="checkbox"
          id="blue"
          checked={color?.includes("blue")}
          onChange={setChange}
        />
        <label htmlFor="blue">Blue</label>
      </div>
      <div className="flex justify-start gap-2 w-full">
        <input
          type="checkbox"
          id="green"
          checked={color?.includes("green")}
          onChange={setChange}
        />
        <label htmlFor="green">Green</label>
      </div>
    </>
  );
}
