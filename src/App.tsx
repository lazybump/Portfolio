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
      <div className="px-8 md:px-24 lg:px-14 lg:w-4/5 mx-auto">
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}

export default App;
