import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const navItems = ["Projects", "Testimonials", "FAQs"];
  return (
    <header
      className="fixed z-10 w-full top-0 flex items-center justify-between px-4 py-2 md:px-16 lg:px-28 lg:py-4 bg-opacity-70 bg-clip-padding"
      style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
    >
      <div>
        <span className="font-bold text-4xl text-primary">an</span>
      </div>
      <nav className="hidden lg:block w-[500px]">
        <ul className="text-gray-400 flex justify-between items-center">
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
      </nav>

      <div className="lg:hidden">
        <RxHamburgerMenu size={28} className="stroke-1 text-primary" />
      </div>
    </header>
  );
};

export default Header;
