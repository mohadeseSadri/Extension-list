import "./App.css";
import Header from "./Components/Header";
import ExtensionList from "./Components/ExtensionList";
import { useThemeStore } from "./store/Theme";
import { useEffect } from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <>
      <main>
        <Header />
        <ExtensionList />
      </main>
    </>
  );
}

export default App;
