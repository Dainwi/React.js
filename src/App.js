// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Singin from "./components/Singin";
import Singup from "./components/Singup";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Singin" element={<Singin/>}/>
        <Route path="/Singup" element={<Singup/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
