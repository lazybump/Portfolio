import React, { useState } from "react";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Projects", "FAQs"];

  return (
    <>
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <div className="mt-24 px-8 md:px-24 lg:px-14 lg:w-4/5 mx-auto space-y-32 lg:space-y-40">
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}

export default App;
