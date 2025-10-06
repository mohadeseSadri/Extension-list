import { useState } from "react";
import Category from "./Category";
import ExtensionCard from "./ExtensionCard";
import { useExtensionsStore } from "../store/extensionStore";

type FilterType = "all" | "active" | "inactive";

function ExtensionList() {
  const [filter, setFilter] = useState<FilterType>("all");
  const { extensions, setExtensions } = useExtensionsStore();
  

  const filtered = extensions.filter((ext) => {
    if (filter === "active") return ext.active;
    if (filter === "inactive") return !ext.active;
    return true;
  });

  const toggleExtension = (id: number) => {
      setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext,
      ),
    );
  };
  return (
    <>
      <div className="p-6">
        <Category filter={filter} setFilter={setFilter} />
        <section className="container mx-auto my-4">
          <div className="grid grid-cols-1 justify-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {extensions && filtered
            .filter((ext) => ext.visible)
            .map((ext) => (
              <ExtensionCard
                key={ext.id}
                extension={ext}
                onToggle={toggleExtension}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default ExtensionList;
