import { NextButton, BackButton } from "@/components/example1/StepButton";
import { getCardData } from "@/lib/actions/example1.actions";
export default async function Page({
  searchParams,
}: {
  searchParams: { step?: string };
}) {
  const selected = parseInt(searchParams.step ?? "0");
  const cardData = await getCardData(selected);

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="card flex flex-col gap-5 w-96">
        {selected === 0 && (
          <>
            <h1>First Card</h1>
            <p className="text-black/70">{cardData}</p>
            <NextButton step={selected} />
          </>
        )}
        {selected === 1 && (
          <>
            <h1>Second</h1>
            <p className="text-black/70">{cardData}</p>
            <section className="flex gap-1">
              <BackButton step={selected} />
              <NextButton step={selected} />
            </section>
          </>
        )}
        {selected === 2 && (
          <>
            <h1>Third</h1>
            <p className="text-black/70">{cardData}</p>
            <BackButton step={selected} />
          </>
        )}
      </div>
    </main>
  );
}
