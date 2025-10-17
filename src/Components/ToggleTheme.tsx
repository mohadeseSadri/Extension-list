import { useThemeStore } from "../store/Theme";
// import Sun from "../assets/images/icon-sun.svg";
// import Moon from "../assets/images/icon-moon.svg";

export function ToggleTheme() {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <button onClick={toggleTheme} className="bg-white dark:bg-gray-900">
      {theme === "dark" ? "Moon" :" Sun"}
    </button>
  );
}
