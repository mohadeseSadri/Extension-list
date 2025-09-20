import clsx from "clsx";

interface AllExtensionsProps {
  active?: boolean;
  onToggle: () => void;
};

function ToggleSwitch({ active = true, onToggle }: AllExtensionsProps) {
  return (
    <>
      <footer className="flex justify-between">

        <button
          onClick={onToggle}
          className={clsx(
            "item-center flex h-7 w-12 cursor-pointer rounded-full opacity-75 hover:opacity-100",
            active ? "bg-red-500" : "bg-gray-400",
          )}
          aria-pressed={active}
        >
          <div
            className={clsx(
              "m-1 h-5 w-5 rounded-full bg-white transition-all",
              active ? "translate-x-full" : "translate-x-0",
            )}
          ></div>
        </button>
      </footer>
    </>
  );
}

export default ToggleSwitch;
