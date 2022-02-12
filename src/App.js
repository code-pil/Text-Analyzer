import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App= () => {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 7 14)";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
         <BrowserRouter>
            <Navbar title="Analayzer" second="About" Mode={mode} toggleMode={toggleMode}/>
            <Routes>
              <Route path="/" element={<TextForm mode={mode}/>}/>
              <Route path="/about" element={<About mode={mode}/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
