import { ImageIcon } from "lucide-react";

export default function ResultCard({ title, description, price }: any) {
  return (
    <div className="gap-4 h-fit flex min-w-[300px] w-[calc(33%-26px)] px-4 py-2 border rounded-md shadow-md border-black/10">
      <div className="flex shrink-0 items-center justify-center w-24 h-24 bg-black/10 rounded-lg">
        <ImageIcon size={32} />
      </div>
      <div className="flex flex-col w-full gap-1">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">${price}</p>
          <button className="bg-blue-500/50 p-2 rounded-lg hover:bg-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
