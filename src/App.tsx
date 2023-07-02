import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Projects", "Testimonials", "FAQs"];

  return (
    <>
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <div className="px-8 md:px-24 lg:px-14 lg:w-4/5 mx-auto">
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}

export default App;
