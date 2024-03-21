import Category from "@/components/example2/Category";
import Colors from "@/components/example2/Colors";
import Price from "@/components/example2/Price";
import ResultCard from "@/components/example2/ResultCard";
import SearchBar from "@/components/example2/SearchBar";
import { getItems } from "@/lib/actions/example2.actions";

export default async function Example2() {
  const items = await getItems({});
  return (
    <main className="flex flex-col justify-center items-center h-screen px-20">
      <h1 className="self-start text-black/80">Search</h1>
      <div className="card flex gap-5 w-full h-3/4 !p-0">
        {/* sidebar */}
        <section className="w-1/5 border-r">
          <SearchBar />
          {/* filters */}
          <div className="flex flex-col gap-8 justify-between items-start p-3 border-black/10">
            <Colors />
            <Category />
            <Price />
          </div>
        </section>
        {/* results */}
        <section className="flex flex-wrap flex-row gap-4 p-8 content-start">
          {items.map((item) => (
            <ResultCard
              key={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
