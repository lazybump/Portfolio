import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="px-4 max-w-7xl mx-auto">
        <Projects />
        <FAQ />
      </div>
    </>
  );
}

export default App;
