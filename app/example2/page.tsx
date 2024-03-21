import Category from "@/components/example2/Category";
import Colors from "@/components/example2/Colors";
import Price from "@/components/example2/Price";
import ResultCard from "@/components/example2/ResultCard";
import ResultCards from "@/components/example2/ResultCards";
import SearchBar from "@/components/example2/SearchBar";
import { getItems } from "@/lib/actions/example2.actions";
import { Suspense } from "react";

export default async function Example2({
  searchParams,
}: {
  searchParams: {
    price?: string;
    category?: string;
    color?: string;
    search?: string;
  };
}) {
  // const items = await getItems({
  //   ...searchParams,
  // });
  return (
    <main className="flex flex-col justify-center items-center h-screen px-20">
      <h1 className="self-start text-black/80">Search</h1>
      <div className="card flex gap-5 w-full h-3/4 !p-0">
        {/* sidebar */}
        <section className="border-r min-w-[300px] w-[300px]">
          <SearchBar />
          {/* filters */}
          <div className="flex flex-col gap-8 justify-between items-start p-3 border-black/10">
            <Colors />
            <Category />
            <Price />
          </div>
        </section>
        {/* results */}
        <section className="flex flex-wrap flex-row gap-4 p-8 content-start relative">
          <Suspense fallback={<Skeleton />} key={JSON.stringify(searchParams)}>
            <ResultCards searchParams={searchParams} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}

const Skeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{ opacity: 1 - i * 0.13 }}
          className="gap-4 h-fit flex min-w-[300px] w-[calc(33%-26px)] px-4 py-2 border rounded-md shadow-md border-black/10"
        >
          <div className="flex shrink-0 items-center justify-center w-24 h-24 bg-black/10 rounded-lg">
            <div className="animate-pulse bg-gray-300 h-24 w-24 rounded-2xl"></div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <div className="animate-pulse bg-gray-500 h-5 w-32 rounded-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};
