import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header
      className="fixed z-10 w-full top-0 flex items-center justify-between px-4 py-2 md:px-8 md:h-24 bg-opacity-70 bg-clip-padding"
      style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
    >
      <div>
        <span className="font-bold text-4xl text-primary">an</span>
      </div>
      <div className="hidden lg:block">
        <nav>
          <ul>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>FAQs</li>
          </ul>
        </nav>
        <button>Get in touch</button>
      </div>

      <div>
        <RxHamburgerMenu size={28} className="stroke-1 text-primary" />
      </div>
    </header>
  );
};

export default Header;
