import logo from "../assets/navbarLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header
      className="bg-red-300 flex items-center justify-between p-3 bg-opacity-70 bg-clip-padding"
      style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
    >
      <div>
        <img src={logo} alt="Logo" className="h-16" />
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
        <RxHamburgerMenu size={28} className="stroke-1" />
      </div>
    </header>
  );
};

export default Header;
