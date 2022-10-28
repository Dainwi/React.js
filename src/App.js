import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Home/>
      <Projects/>
    </>
  );
}

export default App;
