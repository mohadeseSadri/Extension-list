function Category() {
  return (
    <>
      <section className="flex justify-center">
        <div className="m-3 flex w-[80%] justify-between">
          <header>
            <h2 className="text-2xl font-bold">Extensions List</h2>
          </header>

          <ul>
            <li>
              <button className="mx-1 rounded-2xl bg-[#1F2535] px-3 py-1">
                All
              </button>
              <button className="mx-1 rounded-2xl bg-[#1F2535] px-3 py-1">
                Active
              </button>
              <button className="mx-1 rounded-2xl bg-[#1F2535] px-3 py-1">
                Inactive
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Category;
