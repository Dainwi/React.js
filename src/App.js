// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Singin from "./components/Singin";
import Singup from "./components/Singup";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Singin" element={<Singin/>}/>
        <Route path="/Singup" element={<Singup/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
