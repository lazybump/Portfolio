import { useEffect, useRef } from "react";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: string[];
}

const Menu = ({ isMenuOpen, setIsMenuOpen, navItems }: MenuProps) => {
  return (
    <aside
      className={`bg-overlay lg:hidden fixed h-screen top-0 right-0 -z-10 w-3/4 max-w-[470px] py-24 text-center transition-all duration-500 ${
        isMenuOpen ? "" : "translate-x-full"
      }`}
    >
      <ul className="space-y-8">
        {navItems.map((item, index) => (
          <li key={index} className="text-gray-400">
            <a href={`#${item}`} onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
        <li className="px-2">
          <a
            href="#Contact"
            className="bg-white block text-black px-4 py-2 rounded font-medium text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in touch
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
