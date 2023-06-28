import Header from "./components/Header";
import Intro from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="px-4">
        <Intro />
        <Projects />
      </div>
    </>
  );
}

export default App;
