import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="px-4 md:px-10 max-w-7xl">
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}

export default App;
