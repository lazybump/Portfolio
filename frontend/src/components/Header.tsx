import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Projects", "FAQs"];

  return (
    <header
      className="fixed z-20 w-full top-0 px-4 py-3 md:px-16 lg:px-28 lg:py-4 bg-opacity-70 bg-clip-padding"
      style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
    >
      <nav className="flex justify-between">
        <span className="font-bold text-4xl text-primary"></span>
        <ul className="text-gray-400 hidden w-[400px] lg:flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-white duration-300 relative group"
              >
                {item}
                <span className="bg-primary absolute -bottom-4 h-0.5 left-1/2 -translate-x-1/2 w-1 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <a
            href="#Contact"
            className="bg-white text-black px-4 py-2 rounded font-medium text-lg"
          >
            Get in touch
          </a>
        </ul>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 100 100" width={35}>
            <rect
              className={`fill-primary transition-all duration-500 origin-center ${
                isMenuOpen ? "change-y rotate-45" : ""
              }`}
              width={80}
              height={10}
              x={10}
              y={20}
            ></rect>
            <rect
              className={`fill-primary transition-all origin-center ${
                isMenuOpen ? "opacity-0" : ""
              }`}
              width={80}
              height={10}
              x={10}
              y={45}
            ></rect>
            <rect
              className={`fill-primary transition-all duration-500 origin-center ${
                isMenuOpen ? "change-y -rotate-45" : ""
              }`}
              width={80}
              height={10}
              x={10}
              y={70}
            ></rect>
          </svg>
        </button>
      </nav>
      <Menu
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
