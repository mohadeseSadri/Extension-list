type FilterType = "all" | "active" | "inactive";

interface FilterButtonsProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

function Category({ filter, setFilter }: FilterButtonsProps) {
  const buttons: FilterType[] = ["all", "active", "inactive"];

  return (
    <>
      <section className="flex justify-center">
        <div className="m-3 flex w-[80%] justify-between">
          <header>
            <h2 className="text-2xl font-bold">Extensions List</h2>
          </header>

          <ul>
            <li>
              {buttons.map((btn) => (
                <button
                  key={btn}
                  type="button"
                  onClick={() => setFilter(btn)}
                  aria-pressed={filter === btn}
                  className={`mx-1 rounded-2xl bg-[#1F2535] px-3 py-1 ${
                    filter === btn
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {btn.charAt(0).toUpperCase() + btn.slice(1)}
                </button>
              ))}

              
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Category;
