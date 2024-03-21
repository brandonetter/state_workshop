import { getItems } from "@/lib/actions/example2.actions";
import ResultCard from "./ResultCard";

export default async function ResultCards({
  searchParams,
}: {
  searchParams: any;
}) {
  const items = await getItems({ ...searchParams });
  return (
    <>
      {items.map((item) => (
        <ResultCard
          key={item.id}
          title={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </>
  );
}
