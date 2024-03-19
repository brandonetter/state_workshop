export default function Price() {
  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold">Price:</h2>
      <div className="flex justify-start gap-2 w-full">
        <input type="range" id="price" min="0" max="100" className="w-full" />
      </div>
    </>
  );
}
