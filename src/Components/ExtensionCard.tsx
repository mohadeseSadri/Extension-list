import { useExtensionsStore } from "../store/extensionStore";
import ToggleSwitch from "./ToggleSwitch";

interface Extension {
  id: number;
  image: string;
  name: string;
  description: string;
  active: boolean;
}

interface ExtensionCardProps {
  extension: Extension;
  onToggle: (id: number) => void;
}

function ExtensionCard({ extension, onToggle }: ExtensionCardProps) {
  const { hideExtension } = useExtensionsStore();
  return (
    <>
      <div className="flex flex-col justify-between rounded-lg bg-gray-800 p-4 shadow">
        <section className="flex">
          <img src={extension.image} alt="extension.image" className="w-14" />
          <div className="mx-3">
            <h3 className="text-lg font-semibold text-white">
              {extension.name}
            </h3>
            <p className="text-sm text-gray-400">{extension.description}</p>
          </div>
        </section>

        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => hideExtension(extension.id)} className="rounded-2xl border border-2 border-gray-600 px-2 py-1">
            Remove
          </button>
          <ToggleSwitch
            active={extension.active}
            onToggle={() => onToggle(extension.id)}
          />
        </div>
      </div>
    </>
  );
}

export default ExtensionCard;
