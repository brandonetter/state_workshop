"use client";

import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="card flex flex-col gap-5 w-96">
        {selected === 0 && (
          <>
            <h1>First Card</h1>
            <p className="text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum, justo et pretium ultrices, odio urna aliquam libero, nec
              lacinia nunc mi nec est. Sed nec purus sit amet nunc fermentum
              tincidunt. Aenean nec eros nec justo pellentesque tincidunt.
            </p>
            <button onClick={() => setSelected(1)}>Next</button>
          </>
        )}
        {selected === 1 && (
          <>
            <h1>Second</h1>
            <p className="text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum, justo et pretium ultrices, odio urna aliquam libero, nec
              lacinia nunc mi nec est. Sed nec purus sit amet nunc fermentum
              tincidunt. Aenean nec eros nec justo pellentesque tincidunt.
            </p>
            <section className="flex gap-1">
              <button onClick={() => setSelected(0)}>Back</button>
              <button onClick={() => setSelected(2)}>Next</button>
            </section>
          </>
        )}
        {selected === 2 && (
          <>
            <h1>Third</h1>
            <p className="text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum, justo et pretium ultrices, odio urna aliquam libero, nec
              lacinia nunc mi nec est. Sed nec purus sit amet nunc fermentum
              tincidunt. Aenean nec eros nec justo pellentesque tincidunt.
            </p>
            <button onClick={() => setSelected(1)}>Back</button>
          </>
        )}
      </div>
    </main>
  );
}
