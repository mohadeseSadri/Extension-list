import { create } from "zustand";

import Devlens from "../assets/images/logo-devlens.svg";
import StyleSpy from "../assets/images/logo-style-spy.svg";
import SpeedBoost from "../assets/images/logo-speed-boost.svg";
import JSON from "../assets/images/logo-json-wizard.svg";
import Tabmaster from "../assets/images/logo-tab-master-pro.svg";
import viewPort from "../assets/images/logo-viewport-buddy.svg";

export type Extension = {
    id: number;
    name: string;
    description: string;
    active: boolean;
    visible: boolean;
    image: string;
  };
  
  type ExtensionState = {
    extensions: Extension[];
    setExtensions: (updater: (prev: Extension[]) => Extension[]) => void;
    hideExtension: (id: number) => void;
  };

  export const useExtensionsStore = create<ExtensionState>((set) => ({
    extensions: [
      {
        id: 1,
        name: "DevLens",
        image: Devlens,
        description: "Quickly inspect page layouts and visualize element boundaries.",
        active: true,
        visible: true,
      },
      {
        id: 2,
        image: StyleSpy,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        active: true,
        visible: true,
      },
      {
        id: 3,
        image: SpeedBoost,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        active: false,
        visible: true,
      },
      {
        id: 4,
        image: JSON,
        name: "JSONWizard",
        description:
          "Formats, validates, and prettifies JSON responses in-browser",
        active: true,
        visible: true,
      },
      {
        id: 5,
        image: Tabmaster,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions",
        active: true,
        visible: true,
      },
      {
        id: 6,
        image: viewPort,
        name: "viewportBuddy",
        description:
          "Simulates various screen resolutions directly within the browser",
        active: false,
        visible: true,
      },
    ],
    setExtensions: (updater) =>
      set((state) => ({ extensions: updater(state.extensions) })),
    hideExtension: (id) =>
      set((state) => ({
        extensions: state.extensions.map((ext) =>
          ext.id === id ? { ...ext, visible: false } : ext
        ),
      })),
  }));