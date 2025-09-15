import clsx from "clsx";

type AllExtensionsProps = {
    isOpen?: boolean;
    onClick: () => void;
  };
  
function ToggleSwitch({ isOpen = true, onClick }: AllExtensionsProps) {
  return (
    <>
        <footer className="flex justify-between">
              <button className="rounded-2xl border border-2 border-gray-600 px-2 py-1">
                Remove
              </button>

              <button
                onClick={onClick}
                className={clsx(
                  "item-center flex h-7 w-12 cursor-pointer rounded-full opacity-75 hover:opacity-100",
                  isOpen ? "bg-red-500" : "bg-gray-400",
                )}
                aria-pressed={isOpen}
              >
                <div
                  className={clsx(
                    "m-1 h-5 w-5 rounded-full bg-white transition-all",
                    isOpen ? "translate-x-full" : "translate-x-0",
                  )}
                ></div>
              </button>
            </footer>
    </>
  )
}

export default ToggleSwitch