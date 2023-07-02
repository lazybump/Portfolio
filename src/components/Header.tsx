import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";

interface HeaderProps {
  navItems: string[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ navItems, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header
      className="fixed z-20 w-full top-0 px-4 py-3 md:px-16 lg:px-28 lg:py-4 bg-opacity-70 bg-clip-padding"
      style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
    >
      <nav className="flex justify-between">
        <span className="font-bold text-4xl text-primary">an</span>
        <ul className="text-gray-400 hidden w-[500px] lg:flex justify-between items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-white duration-300 relative group"
              >
                {item}
                <span className="bg-primary absolute -bottom-4 h-0.5 left-1/2 -translate-x-1/2 w-1 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <button className="bg-white text-black px-4 py-2 rounded font-medium text-lg">
            Get in touch
          </button>
        </ul>
        <button
          className="lg:hidden relative burger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <RxHamburgerMenu size={28} className="stroke-1 text-primary" />
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
