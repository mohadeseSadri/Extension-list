import logoImg from "../assets/images/logo.svg";
import sunImg from "../assets/images/icon-sun.svg";
function Header() {
  return (
    <>
      <header className="flex justify-center">
        <div className="flex justify-between m-5 w-[80%] bg-[#1F2535] rounded-xl">
          <div>
            <img src={logoImg} alt="logo" className="p-2" />
          </div>

          <div>
            <button>
                <img src={sunImg} alt="sun" className="p-2 m-2 bg-[#2E3447] rounded-xl" />
            </button>
          </div>
        </div>{" "}
      </header>
    </>
  );
}

export default Header;
