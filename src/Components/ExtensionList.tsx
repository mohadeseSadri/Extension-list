import { useState } from "react";
import Category from "./Category";
import ExtensionCard from "./ExtensionCard";

import Devlens from "../assets/images/logo-devlens.svg";
import StyleSpy from "../assets/images/logo-style-spy.svg";
import SpeedBoost from "../assets/images/logo-speed-boost.svg";
import JSON from "../assets/images/logo-json-wizard.svg";
import Tabmaster from "../assets/images/logo-tab-master-pro.svg";
import viewPort from "../assets/images/logo-viewport-buddy.svg";

type FilterType = "all" | "active" | "inactive";
interface Extension {
  id: number;
  image: string;
  name: string;
  description: string;
  active: boolean;
}
function ExtensionList() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [extensions, setExtensions] = useState<Extension[]>([
    {
      id: 1,
      image: Devlens,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize elememnt boundaries.",
      active: true,
    },
    {
      id: 2,
      image: StyleSpy ,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      active: true,
    },
    {
      id: 3,
      image: SpeedBoost,
      name: "SpeedBoost",
      description: "Optimize browser resource usage to accelerate page loading",
      active: false,
    },
    {
      id: 4,
      image: JSON,
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser",
      active: true,
    },
    {
      id: 5,
      image: Tabmaster,
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions",
      active: true,
    },
    {
      id: 6,
      image: viewPort,
      name: "viewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser",
      active: false,
    },
  ]);

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
            {filtered.map((ext) => (
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
