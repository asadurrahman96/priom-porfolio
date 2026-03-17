import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
