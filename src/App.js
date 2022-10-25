import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
