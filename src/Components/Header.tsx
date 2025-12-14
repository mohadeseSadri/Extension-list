import logoImg from "../assets/images/logo-extension.png";
import { ToggleTheme } from "./ToggleTheme";

function Header() {
  return (
    <>
      <header className="flex justify-center">
        <div className="m-5 flex w-[80%] justify-between rounded-xl bg-blue dark:bg-[#1F2535]">
          <a>
            <img src={logoImg} alt="App name logo" className="p-2" />
          </a>

          <ToggleTheme />
        </div>
      </header>
    </>
  );
}

export default Header;
