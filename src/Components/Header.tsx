import logoImg from "../assets/images/logo.svg";
import sunImg from "../assets/images/icon-sun.svg";
function Header() {
  return (
    <>
      <header className="flex justify-center">
        <div className="m-5 flex w-[80%] justify-between rounded-xl bg-[#1F2535]">
          <a>
            <img src={logoImg} alt="App name logo" className="p-2" />
          </a>

          <button>
            <img
              src={sunImg}
              alt="sun"
              className="m-2 rounded-xl bg-[#2E3447] p-2"
              aria-label="Toggle theme"
            />
          </button>
        </div>{" "}
      </header>
    </>
  );
}

export default Header;
