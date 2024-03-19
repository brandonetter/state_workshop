export default function Category() {
  return (
    <>
      <h2 className="border-b border-black/10 w-full font-bold ">Category:</h2>
      {/* radio buttons */}
      <div className="flex justify-start gap-2 w-full flex-wrap">
        <input type="radio" id="all" name="category" />
        <label htmlFor="all">All</label>

        <input type="radio" id="electronics" name="category" />
        <label htmlFor="electronics">Electronics</label>

        <input type="radio" id="clothing" name="category" />
        <label htmlFor="clothing">Clothing</label>
      </div>
    </>
  );
}
