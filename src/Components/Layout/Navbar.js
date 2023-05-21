import Logo from "./../../Images/Logo.png";

function Header() {
  return (
    <header className="sticky top-0 bg-[#7e2d9b] px-10 backdrop-blur-md text-white z-10">
      <div className="flex justify-between     py-6  items-center">
        <div>
          <img src={Logo} alt="Meme Logo" />
        </div>
        <ul className="flex space-x-8 font-semibold">
          <li>
            <button>React Project</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
