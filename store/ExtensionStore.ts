import {create} from "zustand"

type Extension = {
    id: number;
    
    name: string;
    description: string;
    active: boolean;
    visible: boolean;
};

type ExtensionState = {
    extensions: Extension[];
    hideExtension: (id: number) => void;
};

export const useExtensionsStore = create<ExtensionState>((set) => ({
  extensions: [
    {
      id: 1,
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize elememnt boundaries.",
      active: true,
      visible: false
    },
    {
      id: 2,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      active: true,
      visible: false
    },
    {
      id: 3,
      name: "SpeedBoost",
      description: "Optimize browser resource usage to accelerate page loading",
      active: false,
      visible: false
    },
    {
      id: 4,
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser",
      active: true,
      visible: false
    },
    {
      id: 5,
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions",
      active: true,
      visible: false
    },
    {
      id: 6,
      name: "viewportBuddy",
      description: "Simulates various screen resolutions directly within the browser",
      active: false,
      visible: false
    },
  ],
  hideExtension: (id) =>
    set((state) => ({
      extensions: state.extensions.map((ext) =>
        ext.id === id ? { ...ext, visible: false } : ext
      ),
    })),
}));