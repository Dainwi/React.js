import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Home from "./components/Home";

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
    </>
  );
}

export default App;
